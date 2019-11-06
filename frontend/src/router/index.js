import Vue from 'vue'
import Router from 'vue-router'
import dataManager from '@/util/data-manager.js';
import routes from './routes.js';

Vue.use(Router)

export const router = new Router({
  routes: routes,
  mode: 'history'
});

/**
 * 페이지에 넘어가기 전에 실행
 * 쿠키로부터 데이터를 가져와서 vuex에 저장
 */
router.beforeEach((to, from, next) => {
  dataManager.loadDataFromCookie();
  next();
});