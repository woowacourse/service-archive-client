<template>
  <div class="home" ref="home">
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
      const element = this.$refs.home
      element.addEventListener("scroll", async () => {
        if (element.scrollTop + element.clientHeight >= element.scrollHeight - 200) {
          this.loadSpecificConversations();
        }
      });

      this.loadSpecificConversations();
    },
    methods: {
      ...mapActions(["loadSpecificConversations"])
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
