// axios
import axios from "axios";
import * as env from "../env.json";

const baseURL = env.API_URL;

export default axios.create({
  baseURL
  // You can add your headers here
});
