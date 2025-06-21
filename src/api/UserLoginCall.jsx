import EventApiData from "./EventApiData.jsx";
import EventApiRequest from "./EventApiRequest.jsx";

const UserLoginCall = (data) => {
  const method = "POST";
  const requestURL = EventApiData.mainURL + EventApiData.userLoginURL;
  return EventApiRequest(method, requestURL, data);
};

export default UserLoginCall;