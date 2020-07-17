<template>
  <div class="conversations">
    <ConversationItem
      v-for="(conversation, index) in conversations"
      :key="index"
      :conversation="conversation"
    />
  </div>
</template>

<script>
import ConversationItem from "./ConversationItem";

export default {
  props: ["conversations"],
  components: {
    ConversationItem,
  },
};
</script>

<style scoped>
.conversations {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
</style>
