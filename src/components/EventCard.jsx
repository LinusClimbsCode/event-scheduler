import { useNavigate } from 'react-router';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/events/${event.id}`);
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">
          {event.title}
          <div className="badge badge-secondary">
            {event.date.split('T')[0]}
          </div>
        </h2>
        <div className="badge badge-outline">{event.location}</div>
        <p>{event.description}</p>
        <div className="mt-6">
          <button className="btn btn-primary btn-block" onClick={handleDetails}>Details</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
