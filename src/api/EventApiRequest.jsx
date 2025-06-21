import axios from "axios";


const EventApiRequest = (method, url, data = null, config = {}) => {
  return axios({
    method,
    url,
    data,
    ...config,
  })
};

export default EventApiRequest;