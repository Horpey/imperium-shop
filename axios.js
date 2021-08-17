// axios
import axios from "axios";
const baseURL =
  process.env.VUE_APP_API_SERVER ||
  "https://altpower-staging.herokuapp.com/v1/";

export default axios.create({
  baseURL
  // You can add your headers here
});
