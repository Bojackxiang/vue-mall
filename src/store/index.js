import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutation";
import actions from "./actions";

Vue.use(Vuex);

const state = {
  displayUsername: '',
  username: '', 
  cartCount: 0,

};

// 这边 export 出去的是一个对象
export default new Vuex.Store({
  state,
  mutations,
  actions
});
