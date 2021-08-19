const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  notificationSystem: state => state.notificationSystem,
  cartProducts(state) {
    return state.cart;
  }
};

export default getters;
