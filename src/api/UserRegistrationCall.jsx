import EventApiData from "./EventApiData.jsx";
import EventApiRequest from "./EventApiRequest.jsx";

const UserRegistrationCall = (data) => {
  const method = "POST";
  const requestURL = EventApiData.mainURL + EventApiData.userURL;
  return EventApiRequest(method, requestURL, data);
};

export default UserRegistrationCall;