import axios from "@/axios.js";

const actions = {
  getRequest({ commit, dispatch, getters }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${payload.path}`,
        method: "GET"
      })
        .then(resp => {
          resolve(resp);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default actions;
