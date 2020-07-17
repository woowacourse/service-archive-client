<template>
  <div class="home">
    <Header @clickMenu="drawer = !drawer" />
    <SideBar :drawer="drawer">
      <OptionContainer
        title="기수"
        :options="generations"
        slot="generation"
        @clickOption="handleGenerationOption"
      />
      <OptionContainer title="레벨" :options="levels" slot="level" @clickOption="handleLevelOption" />
      <Button @click="submit">적용</Button>
    </SideBar>
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
import OptionContainer from "../components/OptionContainer";
import Button from "../components/Button";

export default {
  components: { Header, ConversationList, SideBar, OptionContainer, Button },
  data: () => ({
    drawer: false,
    generations: [
      {
        select: false,
        text: "1기"
      },
      {
        select: false,
        text: "2기"
      }
    ],
    levels: [
      {
        select: false,
        text: "1"
      },
      {
        select: false,
        text: "2"
      },
      {
        select: false,
        text: "3"
      },
      {
        select: false,
        text: "4"
      }
    ]
  }),
  computed: mapState(["conversations"]),
  mounted() {
    //  this.loadConversations();
  },
  methods: {
    ...mapActions(["loadConversations"]),
    handleGenerationOption(index) {
      this.generations[index].select = !this.generations[index].select;
    },
    handleLevelOption(index) {
      this.levels[index].select = !this.levels[index].select;
    },
    submit() {
      this.drawer = false;
    }
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #111;
}

.main {
  margin-top: 50px;
  height: 100%;
}
</style>
