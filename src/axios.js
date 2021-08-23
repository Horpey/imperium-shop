// axios
import axios from "axios";
const baseURL = "https://altpower-staging.herokuapp.com/v1/";

export default axios.create({
  baseURL,
  // You can add your headers here
});
