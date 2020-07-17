<template>
  <div class="home">
    <header class="header">
      <div class="menu"></div>
      <div class="logo"></div>
      <div class="search"></div>
    </header>
    <div class="options-container">
      <div class="generations">
        <div
          class="generation"
          v-for="(generation, index) in generations"
          :key="index"
        >
          {{ generation.text }}
        </div>
      </div>
      <div class="levels">
        <div class="level" v-for="(level, index) in level" :key="index">
          {{ level.text }}
        </div>
      </div>
    </div>
    <ConversationList :conversations="conversations" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ConversationList from "../components/ConversationList";

export default {
  components: { ConversationList },
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

<style scoped></style>
