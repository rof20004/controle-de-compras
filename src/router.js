import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Produtos from '@/views/Produtos.vue'
import Carrinho from '@/views/Carrinho.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/produtos',
          name: 'Produtos',
          component: Produtos
        },
        {
          path: '/carrinho',
          name: 'Carrinho',
          component: Carrinho
        }
      ]
    }
  ]
})
