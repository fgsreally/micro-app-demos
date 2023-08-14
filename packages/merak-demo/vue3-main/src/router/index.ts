import { createRouter, createWebHistory } from 'vue-router'
import { useMenuStore } from '@/stores/menu'
import { useUserStore } from '@/stores/user'
import { user as userData } from '@/data/userData'
import { setMicroAppLoading } from '@/utils/microAppLoading'
import Communicate from '@/views/CommunicationTest.vue'
import Navigate from '@/views/NavigateView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main/communication-test'
    },
    {
      name: '主应用',
      path: '/main',
      children: [
        {
          path: 'communication-test',
          name: '主应用通信测试',
          component: Communicate
        },
        {
          path: 'navigate-view',
          name: '主应用跳转测试',
          component: Navigate
        }
      ]
    },

    {
      name: 'Vue2子应用',
      path: '/vue2App',
      children: [
        {
          path: 'communication-test',
          component: () => import('@/views/merak/Vue2.vue'),
          props: {
            routePath: '/'
          }
        },
        {
          path: 'navigate-view',
          component: () => import('@/views/merak/Vue2.vue'),
          props: {
            routePath: '/navigate-view'
          }
        }
      ]
    },
    {
      name: 'React18子应用',
      path: '/reactApp',
      children: [
        {
          path: 'communication-test',
          component: () => import('@/views/merak/React.vue'),
          props: {
            routePath: '/'
          }
        },
        {
          path: 'navigate-view',
          component: () => import('@/views/merak/React.vue'),
          props: {
            routePath: '/navigate-view'
          }
        }
      ]
    },
    {
      name: 'Vite子应用',
      path: '/viteApp',
      children: [
        {
          path: 'communication-test',
          component: () => import('@/views/merak/Vite.vue'),
          props: {
            routePath: '/'
          }
        },
        {
          component: () => import('@/views/merak/Vite.vue'),
          path: 'navigate-view',
          props: {
            routePath: '/navigate-view'
          }
        }
      ]
    },
    {
      path: '/coexist-micro-app',
      component: () => import('@/views/CoexistMicroApp.vue')
    },
    {
      path: '/css-isolation',
      component: () => import('@/views/CssIsolation.vue')
    },
    {
      path: '/keep-alive-app',
      children: [
        {
          path: 'vue2',
          component: () => import('@/views/merak/Vue2.vue'),
          props: {
            keepAlive: true,
            routePath: '/'
          }
        },
        {
          name: 'React18子应用保活',
          path: 'react18',
          component: () => import('@/views/merak/React.vue'),
          props: {
            keepAlive: true,
            routePath: '/'
          }
        },
        {
          name: 'Vite子应用保活',
          path: 'vite',
          component: () => import('@/views/merak/Vite.vue'),
          props: {
            keepAlive: true,
            routePath: '/'
          }
        }
      ]
    }
  ]
})

// 是否已经加载初始化的数据
let loadedInitData = false

router.beforeEach(async (to, from, next) => {
  const { setUser } = useUserStore()
  setMicroAppLoading(true)
  if (!loadedInitData) {
    setUser(userData)
    loadedInitData = true
    next(to)
  } else {
    next()
  }
})

router.afterEach(async () => {
  setMicroAppLoading(false)
})

export default router
