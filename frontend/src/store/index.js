import Vue from 'vue';
import Vuex from 'vuex';

import account from '@/store/modules/account.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    account
  }
});

export default store;
