import cookies from "js-cookie";

let token = cookies.get("x-access-token");

export const state = {
  cart: [],
  user: null,
  customer: null,
  token: token ? token : null,
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
