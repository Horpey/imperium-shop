const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  notificationSystem: state => state.notificationSystem,
  user: state => state.user,
  customer: state => state.customer,
  token: state => state.token,
  cartProducts(state) {
    return state.cart;
  }
};

export default getters;
