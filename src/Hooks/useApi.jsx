import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_baseURL}`,
});

const useApi = () => {
  return API;
};

export default useApi;
