import { EventCard } from '../components';
import { useLoaderData } from 'react-router';

const HomePage = () => {
  const eventData = useLoaderData();
  const events = eventData.data.results;

  let gridCols = "grid-cols-1";
  if (events.length === 2) gridCols = "grid-cols-2";
  if (events.length >= 3) gridCols = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";

  return (
    <div className={`grid ${gridCols} gap-8 justify-items-center mt-8`}>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default HomePage;
