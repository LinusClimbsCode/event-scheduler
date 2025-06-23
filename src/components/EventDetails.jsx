import { useNavigate } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context';
import { LocationMap } from '../components';

const EventDetails = ({ event }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // --- Countdown logic ---
  const [counter, setCounter] = useState({
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  });

  useEffect(() => {
    if (!event?.date) return;

    const target = new Date(event.date).getTime();

    const updateCounter = () => {
      const now = Date.now();
      const diff = Math.max(target - now, 0);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const min = Math.floor((diff / (1000 * 60)) % 60);
      const sec = Math.floor((diff / 1000) % 60);

      setCounter({ days, hours, min, sec });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
  }, [event?.date]);
  // --- End countdown logic ---

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="min-h-400px min-w-400px">
          <LocationMap
            latitude={event.latitude}
            longitude={event.longitude}
            popupText={event.title}
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">{event.title}</h1>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ '--value': counter.days }}>{counter.days}</span>
              </span>
              days
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ '--value': counter.hours }}>
                  {counter.hours}
                </span>
              </span>
              hours
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ '--value': counter.min }}>{counter.min}</span>
              </span>
              min
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ '--value': counter.sec }}>{counter.sec}</span>
              </span>
              sec
            </div>
          </div>
          <p className="py-6">{event.description}</p>
          {user ? (
            <div>
            <button className="btn btn-primary">Update</button>
            <button className="btn btn-error">Delete</button>
            </div>
          ) : (
            <button className="btn btn-primary">
              Sign In (To Update Event)
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
