import axios from "axios";

export const baseService = {};

baseService.get = async (url, endpoint) => {
  let response;

  try {
    response = await axios.get(url + endpoint);
    return response;
  } catch (error) {
    console.log(
      `\nbaseService.get: ${
        url + endpoint
      }\nerror: ${error}\nresponse: ${response}`
    );
  }
};

baseService.post = async (url, endpoint, data, configs = null) => {
  let response;

  try {
    response = await axios.post(url + endpoint, data, { ...configs });
    return response;
  } catch (error) {
    console.log(
      `\nbaseService.post: ${
        url + endpoint
      }\nerror: ${error}\nresponse: ${response}`
    );
  }
};

baseService.put = async (url, endpoint, data, configs = null) => {
  let response;

  try {
    response = await axios.put(url + endpoint, data, { ...configs });
    return response;
  } catch (error) {
    console.log(
      `\nbaseService.put: ${
        url + endpoint
      }\nerror: ${error}\nresponse: ${response}`
    );
  }
};

baseService.delete = async (url, endpoint, configs = null) => {
  let response;

  try {
    response = await axios.delete(url + endpoint, { ...configs });
    return response;
  } catch (error) {
    console.log(
      `\nbaseService.delete: ${
        url + endpoint
      }\nerror: ${error}\nresponse: ${response}`
    );
  }
};
