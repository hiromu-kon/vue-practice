import Vue from 'vue';
import App from './App.vue';
import LikeNumber from  './components/LikeNumber.vue';
import router from  "./router";

Vue.config.productionTip = false

Vue.component('LikeNumber', LikeNumber)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
