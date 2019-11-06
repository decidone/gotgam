import store from '../store/index.js';
import cookieManager from './cookie-manager.js';

/**
 * object data를 Vuex에 저장
 * @param {string} dataName
 * @param {object} data
 */
const saveDataVuex = (dataName, data) => {
  store.commit(dataName, [data]);
};

export default {
  /**
   * @param {string} dataName
   * @param {object} data
   */
  saveData: (dataName, data) => {
    saveDataVuex(dataName, data);
    let exdate = new Date();
    // 쿠키 저장시간을 1일로 설정
    exdate.setDate(exdate.getDate() + 1);
    cookieManager.setCookieObj(dataName,
      data, exdate.toUTCString());
  },
  /**
   * object data를 쿠키로부터 가져온 뒤 Json 파싱하여
   * Vuex에 저장
   */
  loadDataFromCookie: () => {
    // string 으로 받아서 json파싱
    const userId = JSON.parse(cookieManager.getCookie('USER_ID'));

    // 쿠키에 데이터가 있었는지 확인 후 vuex에 저장
    if (userId != null) {
      saveDataVuex('USER_ID', userId);
    }
  },
  /**
   * tabStack을 로컬 저장소(Cookie, Vuex)에서 제거
   */
  clearData: () => {
    // Vuex에서 tabStack들을 삭제
    store.commit('USER_ID', []);

    // Cookie에서 tabStack들을 삭제
    cookieManager.deleteCookie('USER_ID');
  },
};
