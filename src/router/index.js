// import VueRouter from 'vue-router'
import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'
// 1. 定义路由组件.
// 也可以从其他文件导入
import Car from '../components/Car.vue'
import Order from '../components/Order.vue'
import App from '../components/HelloWorld.vue'
import LoginVue from '../components/login.vue'
import Xx from '../components/Xx.vue'
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  {
    path: '/',
    redirect: '/login',
    component: LoginVue,
  },
  {
    name: 'login',
    path: '/login',
    component: LoginVue,
    //路由懒加载
    // component: () => import('@/components/login.vue')
    //异步加载
    // component: resolve => require(['@/components/login.vue'], resolve),
  },
  {
    name: 'app',
    path: '/app',
    component: App,
    children: [
      {
        name: 'car',
        path: '/car',
        component: Car
      },
      {
        name: 'Order',
        path: '/Order',
        component: Order
      },
      {
        name: 'Xx',
        path: '/Xx',
        component: Xx
      },
      {
        name: 'Workbench',
        path: '/Workbench',
        component: () => import('@/components/Workbench.vue')
      }
    ]
  }
]
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
  // console.log('前置路由守卫', to, from)
  if (to.meta.isAuth) { //判断是否需要鉴权
    if (localStorage.getItem('name') === 'wwwwwwww') {
      next()
    } else {
      alert('学校名不对，无权限查看！')
    }
  } else {
    next()
  }
})

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to) => {
  // console.log('后置路由守卫', to, from)
  document.title = to.meta.title || '后台管理系统'
})

export default router

