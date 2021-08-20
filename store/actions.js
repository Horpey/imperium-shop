import axios from "@/axios.js";
import { setAuthToken, resetAuthToken } from "../util/auth";
import cookies from "js-cookie";

const token = cookies.get("x-access-token");
if (token) setAuthToken(token);
else resetAuthToken();

const actions = {
  addProductToCart(context, product) {
    context.commit("pushProductToCart", product);
  },
  authRequest({ commit, dispatch, getters }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        url: payload.path,
        data: payload.data,
        method: "POST"
      })
        .then(resp => {
          setAuthToken(resp.data.data.token);
          cookies.set("x-access-token", resp.data.data.token, {
            expires: 7
          });
          resolve(resp);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getRequest({ commit, dispatch, getters }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${payload.path}`,
        method: "GET",
        headers: {
          Authorization: `bearer ${token}`
        }
      })
        .then(resp => {
          resolve(resp);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  logout({ commit }) {
    commit("reset_user") + resetAuthToken() + cookies.remove("x-access-token");
    this.$auth.$storage.removeLocalStorage("user");
    this.$auth.$storage.removeLocalStorage("customer");
    return Promise.resolve();
  }
};

export default actions;
