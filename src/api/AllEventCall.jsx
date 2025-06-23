import EventApiData from "./EventApiData.jsx";
import EventApiRequest from "./EventApiRequest.jsx";

const AllEventCall = (data = null) => {
  const method = "GET";
  const requestURL = EventApiData.mainURL + EventApiData.eventURL;
  return EventApiRequest(method, requestURL, data);
};

export default AllEventCall;