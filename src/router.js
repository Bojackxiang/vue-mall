import Vue from 'vue'
import Router from 'vue-router'
import index from './pages/index'
import Product from './pages/Product'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import OrderDetail from './pages/OrderDetail'
import OrderConfirm from './pages/OrderConfirm'
import OrderList from './pages/OrderList'
import OrderPay from './pages/OrderPay'
import Home from './pages/Home'
import Order from './pages/Order'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [ // 子路由
                {
                    path: '',
                    name: 'page-index',
                    component: index, 
                },
                {
                    path: 'home',
                    redirect: '/'
                },
                {
                    path: 'product/:id',
                    name: 'page-product',
                    component: Product, 
                },
                {
                    path: 'detail/:id',
                    name: 'page-detail',
                    component: Detail, 
                },
            ],
            
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart, 
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [ // ! 子陆游不需要添加 / 在最前面
                {
                    path: 'list',
                    name: 'order-list',
                    component: OrderList
                }, 
                {
                    path: 'detail',
                    name: 'order-detail',
                    component: OrderDetail
                }, 
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: OrderConfirm
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: OrderPay
                },
            ]
        }
    ],
})