const USER_ID = 'USER_ID';

// State(상태)
// 이곳에서 상태를 저장한다.
const state = {
  userId: '',
};

// Getters
// 상태의 값을 확인한다. 연산작업이 있다면 이를 캐싱하여 효율적이다.
const getters = {
  userId(state) {
    return state.userId
  },
};

// Mutations (변이)
// State를 동기적으로 변화시킨다. commit을 통해 접근한다.
const mutations = {
  [USER_ID](state, payload) {
    state.userId = payload;
  },
};

// Actions (액션)
// 변이들을 비동기적으로 변화시킨다.
// HTTP get 요청이나 setTimeout 과 같은 비동기 처리 로직들은 액션에 선언해준다.
// Dispatch를 통해 접근한다.
const actions = {
  
};

export default {
  state,
  getters,
  mutations,
  actions
}
