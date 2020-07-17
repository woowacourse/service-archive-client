<template>
  <div class="conversation">
    <div class="content">
      <div class="message">{{ conversation.message }}</div>
      <div class="user">{{ conversation.userId }}</div>
      <div class="datetime">
        {{ $moment(conversation.conversationTime).format("MMMM, DD, YYYY") }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["conversation"],
};
</script>

<style scoped>
.conversation {
  display: flex;
  background: #333;
  width: 80vw;
  margin: 15px;
  padding: 15px;
  color: #fff;
  border-radius: 15px;
}

.message {
  font-size: 20px;
  padding: 3px;
}

.user {
  padding: 3px;
}

.datetime {
  color: #aaa;
  padding: 3px;
}
</style>
