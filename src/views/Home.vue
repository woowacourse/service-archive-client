<template>
  <div class="home">
    <ConversationList :conversations="conversations"/>
  </div>
</template>

<script>
  import {mapActions, mapState} from "vuex";
  import ConversationList from "../components/ConversationList";

  export default {
    components: {ConversationList},
    computed: mapState(["conversations"]),
    mounted() {
      this.loadConversations();
    },
    methods: {
      ...mapActions(["loadConversations"])
    }
  };
</script>

<style scoped>
  .home {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    background: #111;
  }
</style>
