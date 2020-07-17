import Vue from "vue";
import Vuex from "vuex";
import * as conversations from "../api/conversations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    conversations: [],
  },
  mutations: {
    setConversations(state, payload) {
      state.conversations = payload;
    },
  },
  actions: {
    async loadConversations({ commit }) {
      const { data } = await conversations.fetchAll();
      commit("setConversations", data);
    },
  },
  modules: {},
});
