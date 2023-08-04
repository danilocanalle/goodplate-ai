import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.clarifai.com",
  headers: {
    Authorization: "Key d41a086fe0a6418cad38cda52cecb704",
  },
});
