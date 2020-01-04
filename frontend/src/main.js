
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {store} from './store';

import NowUIKit from './plugins/now-ui-kit';
import Toasted from 'vue-toasted';
Vue.config.productionTip = false;
Vue.use(NowUIKit);
Vue.use(Toasted,{
  iconPack: 'fontawesome'
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
