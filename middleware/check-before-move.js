import cookies from "js-cookie";

export default function({ $auth, store, redirect, route }) {
  // console.log($auth.$storage.getLocalStorage("user"));
  // let user = $auth.$storage.getLocalStorage("user");
  // const isAuthenticated = user ? true : false;
  // if (!isAuthenticated) {
  //   redirect("/login");
  // }
  return Promise.resolve();
}
