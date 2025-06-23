import { EventDetails } from "../components";
import { useLoaderData } from 'react-router';

const EventDetailPage = () => {
    const eventData = useLoaderData();

    return (
        <EventDetails event={eventData.data} />
    )
}

export default EventDetailPage;