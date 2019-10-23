import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Exam01 from '@/components/exam/Exam01.vue'
import Login from "@/components/exam/Login.vue"
import Product from '@/components/exam/Product.vue'
import register from '@/components/exam/register.vue'
import home from '@/components/home.vue'
import TitileBar from '@/components/exam/TitileBar.vue'
import pingwei from '@/components/exam/pingwei.vue'
import product_one from '@/components/exam/product_details/product_one.vue'
import product_two from '@/components/exam/product_details/product_two.vue'
// import TitleBar from '@/components/pagecomponent/TitileBar.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/product_two',
      component: product_two
    },
    {
      path: '/product_one',
      component: product_one
    },
    {
      path: '/Exam01',
      component: Exam01
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Product',
      component: Product
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/TitileBar',
      component: TitileBar
    },
    {
      path: '/pingwei',
      component: pingwei
    }
  ]
})
