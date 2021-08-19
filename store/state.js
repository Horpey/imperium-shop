// const state = {
// cart: () => {
//   return "hello";
// let cart = this.$auth.$storage.getLocalStorage("cart")
//   ? JSON.parse(cart)
//   : [];
// return cart;
// }
// };

export const state = {
  cart: [],
  notificationSystem: {
    options: {
      ballon: {
        balloon: true,
        position: "bottomCenter"
      },
      info: {
        position: "bottomCenter"
      },
      success: {
        position: "bottomCenter"
      },
      warning: {
        position: "bottomCenter"
      },
      error: {
        position: "bottomCenter"
      }
    }
  }
};

export default state;
