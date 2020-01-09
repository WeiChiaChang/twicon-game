import Vue from 'vue';
import {
  MdApp,
  MdContent,
  MdToolbar,
  MdButton,
  MdTable,
} from 'vue-material/dist/components';
import router from './router';
import App from './App.vue';
import store from './store';

import './registerServiceWorker';
import 'vue-material/dist/vue-material.min.css';
// import 'vue-material/dist/theme/default.css';
import 'vue-material/dist/theme/black-green-light.css'

import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-155859177-1',
  router,
  autoTracking: {
    pageviewOnLoad: false
  }
})

Vue.use(MdApp);
Vue.use(MdContent);
Vue.use(MdToolbar);
Vue.use(MdButton);
Vue.use(MdTable);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
