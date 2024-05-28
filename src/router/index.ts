import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../components/Home.vue'
import DatasetVue from '../components/Dataset.vue'
import CSVVue from '../components/CSV.vue'
import TRVue from '../components/TR.vue'
import STSVue from '../components/STS.vue'
import STVue from '../components/ST.vue'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeVue
    },
    {
      path: '/dataset',
      name: 'dataset',
      component: DatasetVue
    },
    {
      path: '/csv',
      name: 'csv',
      component: CSVVue
    },
    {
      path: '/tr',
      name: 'tr',
      component: TRVue
    },
    {
      path: '/st',
      name: 'st',
      component: STVue
    },
    {
      path: '/sts',
      name: 'sts',
      component: STSVue
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

router.beforeEach(async (to, from) => {

  if (to.matched.length === 0) {  // 如果未匹配到路由
    return { name: 'home' }

  }
})

export default router
