import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '../components/IndexPage'
import Show from '../components/ShowPage'
import MainPage from '../components/container.vue';
import Login from '@/components/login.vue';
import RegionTravel from '@/components/regionTravel.vue';
import MoodTravel from '@/components/moodTravel.vue';
import Registration from '@/components/registration.vue';
import GotgamDetail from '@/components/gotgamDetail.vue';
import About from '@/components/about.vue';
import SignUp from '@/components/SignUp.vue';
import myPage from '@/components/mypage.vue';
import myPageDetail from '@/components/myPageDetail.vue';

export default new Router({
 mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/show',
      name: 'show',
      component: Show
    },

    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regiontravel',
      name: 'RegionTravel',
      component: RegionTravel
    },
    {
      path: '/moodtravel',
      name: 'MoodTravel',
      component: MoodTravel
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/regiontravel:id',
      name: 'GotgamDetail',
      component: GotgamDetail
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/mypage',
      name: 'myPage',
      component: myPage
    },
    {
      path: '/mypage:id',
      name: 'myPageDetail',
      component: myPageDetail
    }
  ]
})
