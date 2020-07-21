import Vue from "vue";
import Vuex from "vuex";
import * as conversations from "../api/conversations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    conversations: [],
    filter: {
      drawer: false,
      generations: [
        {
          select: false,
          text: "1기",
        },
        {
          select: false,
          text: "2기",
        },
      ],
      levels: [
        {
          select: false,
          text: "1",
        },
        {
          select: false,
          text: "2",
        },
        {
          select: false,
          text: "3",
        },
        {
          select: false,
          text: "4",
        },
      ],
    },
  },
  mutations: {
    setConversations(state, payload) {
      state.conversations = payload;
    },
    toggleSideBar(state) {
      state.filter.drawer = !state.filter.drawer;
    },
    toggleGenerationOption(state, index) {
      state.filter.generations[index].select = !state.filter.generations[index].select;
    },
    toggleLevelOption(state, index) {
      state.filter.levels[index].select = !state.filter.levels[index].select;
    },
    optionSubmit(state) {
      state.filter.drawer = false;
    },
  },
  actions: {
    async loadConversations({commit}) {
      const {data} = await conversations.fetchAll();
      commit("setConversations", data);
    },
  },
  modules: {},
});
