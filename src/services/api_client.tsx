import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0e5155ffdc2447d5b9d056d8fde8c1a0",
  },
});
