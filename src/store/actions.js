import axios from "@/axios.js";

export const actions = {
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
          resolve(resp);
        })
        .catch(err => {
          localStorage.removeItem("token");
          reject(err);
        });
    });
  },
  postRequest({ commit, dispatch, getters }, payload) {
    return new Promise((resolve, reject) => {
      const token = getters.token;
      axios({
        url: payload.path,
        data: payload.data,
        method: "POST",
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
  getRequest({ commit, dispatch, getters }, payload) {
    return new Promise((resolve, reject) => {
      const token = getters.token;

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
    commit("logout");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
    return Promise.resolve();
  }
};
