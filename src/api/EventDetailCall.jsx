import EventApiData from "./EventApiData.jsx";
import EventApiRequest from "./EventApiRequest.jsx";

const EventDetailCall = ({ params }) => {
  const method = "GET";
  const requestURL = EventApiData.mainURL + EventApiData.eventURL + `/${params.eventId}`;
  return EventApiRequest(method, requestURL);
};

export default EventDetailCall;