import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
  ticket: '',
  sessionId: ''
}
const mutations = {
  changeTicket(state, msg) {
    state.isLogin = msg;
  },

}
const actions = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions
});
