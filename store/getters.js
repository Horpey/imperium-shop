const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  cartProducts(state) {
    return state.cart;
  }
};

export default getters;
