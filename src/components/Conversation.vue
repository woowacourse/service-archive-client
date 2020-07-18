<template>
  <div class="conversation">
    <div class="information">
      <div class="user">{{conversation.userId}}</div>
      <div class="datetime">
        {{ $moment(conversation.conversationTime).format("MMMM, DD, YYYY") }}
      </div>
    </div>
    <div class="message">{{conversation.message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Conversation",
    props: ["conversation"]
  }
</script>

<style scoped>
  .conversation {
    display: flex;
    flex-direction: column;
    background: #333;
    width: 80vw;
    max-width: 960px;
    margin: 15px;
    padding: 15px;
    color: #fff;
    border-radius: 15px;
  }

  .information {
    display: flex;
    justify-content: space-between;
  }

  .message {
    margin: 10px 0;
    font-size: 20px;
    color: #ddd;
    padding: 3px;
  }

  .message a {
    color: aqua;
  }

  .user {
    padding: 3px;
  }

  .datetime {
    color: #aaa;
    padding: 3px;
  }
</style>
