// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入第三方的组件库mint-ui
//完整引入mint-ui组件库中所有组件
import MintUI from "mint-ui"
//单独引入mint-ui库中样式文件
import "mint-ui/lib/style.css"
//将mint-ui注册vue实例
Vue.use(MintUI)
// //4.引入字体图标文件
// import "./font/iconfont.css"
//5.引入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//5.引入axios模块
import axios from "axios"
//6.配置服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:4000/"
//7.配置保留session的信息
axios.defaults.withCredentials=true;
//8.axios 注册vue
Vue.prototype.axios = axios;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



