import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/gloable.css"
import request from "@/utils/request";
// import {prototype} from "vue-router";

Vue.config.productionTip = false

Vue.use(ElementUI,{size:"small"});

Vue.prototype.request = request
Vue.prototype.$baseUrl=process.env.VUE_APP_BASEURL

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
