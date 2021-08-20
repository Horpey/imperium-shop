const mutations = {
  saveData(state) {
    this.$auth.$storage.setLocalStorage("cart", JSON.stringify(state.cart));
  },
  pushProductToCart(state, product) {
    state.cart = product;
    this.commit("saveData");
  },
  set_user(store, data) {
    this.$auth.$storage.setLocalStorage("user", JSON.stringify(data));
    store.user = data;
  },
  set_customer(store, data) {
    this.$auth.$storage.setLocalStorage("customer", JSON.stringify(data));
    store.customer = data;
  },
  set_token(store, data) {
    store.token = data;
  },
  reset_user(store) {
    store.user = null;
    store.customer = null;
    store.token = null;
  }
};

export default mutations;
