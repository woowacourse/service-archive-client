import Vue from "vue";
import Vuex from "vuex";
import * as conversationAPI from "../api/conversations";

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
    search: {
      size: 10,
      message: "",
    },
    loading: false,
  },
  mutations: {
    setConversations(state, payload) {
      state.conversations = payload;
    },
    setMessage(state, payload) {
      state.search.message = payload;
    },
    appendConversations(state, payload) {
      state.conversations.push(...payload);
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
    setLoading(state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    async loadConversations({commit}) {
      const {data} = await conversationAPI.fetchAll();
      commit("setConversations", data);
    },
    async loadSpecificConversations({state: {conversations, search, loading}, commit}, isFirst) {
      if (loading) {
        return;
      }
      commit("setLoading", true);
      if (isFirst) {
        commit("setConversations", [])
      }
      const lastConversation = conversations[conversations.length - 1];
      const {data} = await conversationAPI.fetchSpecificConversation({
        conversationTime: isFirst ? null : (lastConversation && lastConversation.conversationTime),
        ...search
      });
      commit("appendConversations", data);
      commit("setLoading", false);
    },
  },
  modules: {},
});
