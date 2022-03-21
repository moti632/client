import axios from "axios";
import { toast } from "react-toastify";
import { getJWT } from "./userService";

axios.defaults.headers.common["x-auth-token"] = getJWT();

axios.interceptors.response.use(null, error => {
  const expectedError = error.response && error.response.status >= 400;
  if (expectedError) toast.error(`An error occurred: ${error.message}`);
  return Promise.reject(error);
});

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};

export default http;
