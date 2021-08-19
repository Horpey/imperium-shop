const mutations = {
  saveData(state) {
    this.$auth.$storage.setLocalStorage("cart", JSON.stringify(state.cart));
  },
  pushProductToCart(state, product) {
    state.cart = product;
    this.commit("saveData");
  }
};

export default mutations;
