import Vue from 'vue';
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css'; // Vuesax styles
import 'material-icons/iconfont/material-icons.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: 'rgb(78, 74, 74)',
      success: 'rgb(23, 201, 100)',
      danger: 'rgb(242, 19, 93)',
      warning: 'rgb(255, 130, 0)',
      dark: 'rgb(36, 33, 69)',
      new: 'rgb(255, 33, 69)',
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
