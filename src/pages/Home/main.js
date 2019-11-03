import Vue from "vue";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import i18n from "./i18n";
import axios from "axios";
import Spinner from "@/plugins/spinner/Installer.js";

Vue.use(Spinner);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
