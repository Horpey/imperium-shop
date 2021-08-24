import Vue from "vue";
import VueCryptojs from "vue-cryptojs";
Vue.use(VueCryptojs);

export const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  notificationSystem: state => state.notificationSystem,
  user: state => state.user,
  customer: state => state.customer,
  passPhrase: state => state.passPhrase,
  paystackkey: state => state.paystackkey,
  isLoggedIn: state => !!state.token,
  token: state => {
    let dToken = Vue.CryptoJS.AES.decrypt(
      state.token,
      state.passPhrase
    ).toString(Vue.CryptoJS.enc.Utf8);

    return dToken;
  },
  cartProducts(state) {
    return state.cart;
  },
  categorySelect: state => state.categorySelect
};
