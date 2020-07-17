<template>
  <div class="home">
    <Header @clickMenu="drawer = !drawer" />
    <SideBar :drawer="drawer"></SideBar>
    <div class="main" @click.capture="drawer = false">
      <ConversationList :conversations="conversations" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import ConversationList from "../components/ConversationList";

export default {
  components: { Header, ConversationList, SideBar },
  data: () => ({
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
  }),
  computed: mapState(["conversations"]),
  mounted() {
    this.loadConversations();
  },
  methods: {
    ...mapActions(["loadConversations"]),
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main {
  margin-top: 50px;
  height: 100%;
}
</style>
