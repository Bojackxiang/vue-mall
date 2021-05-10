import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import config from './config'
import VueLazyLoad from 'vue-lazyload'   
import VueCookies from 'vue-cookies';
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

axios.defaults.baseURL = config.baseURL
axios.defaults.timeout = 8000; // ! 一定要设置超时的时间

axios.interceptors.response.use(function(response){
  return response.data
  
  // if(responseData.status === 0 ){
  //   return response.data; // 这里就是直接 把 数据返回
  // }
  
  // // not authenticated 
  // if(responseData.status === 10){
  //   window.location.href = '/#/login'
  // }

  // // Error
  // alert(responseData.message)
  // return null
})

Vue.use(VueAxios, axios)
Vue.use(VueLazyLoad,  {
  loading: '/imgs/loading-svg/loading-bars.svg' 
})
Vue.use(VueCookies)
Vue.use(store)
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  store,
  router, 
  render: h => h(App),
}).$mount('#app')
