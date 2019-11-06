import Vue from 'vue';
import Vuex from 'vuex';

import account from '@/store/modules/account.js';

// Vue.use(Vuex)를 호출합니다.
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    account,
  }
});

export default store;
