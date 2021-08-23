import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueIziToast from "vue-izitoast";
import VueCryptojs from "vue-cryptojs";
import helpers from "./helpers";

import "izitoast/dist/css/iziToast.min.css";

Vue.config.productionTip = false;

const plugin = {
  install() {
    Vue.helpers = helpers;
    Vue.prototype.$helpers = helpers;
  },
};

Vue.use(plugin);
Vue.use(VueIziToast);
Vue.use(VueCryptojs);

Vue.prototype.$passPhrase = store.getters.passPhrase;
Vue.prototype.$toastPosition = {
  position: "topCenter",
};
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
