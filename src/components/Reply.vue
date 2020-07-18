<template>
  <div class="reply">
    <div class="information">
      <div class="user">{{reply.userId}}</div>
      <div class="datetime">
        {{ $moment(reply.conversationTime).format("MMMM, DD, YYYY") }}
      </div>
    </div>
    <div class="message">{{reply.message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Reply",
    props: ["reply"]
  }
</script>

<style scoped>
  .reply {
    display: flex;
    flex-direction: column;
    background: #333;
    width: 80vw;
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
    font-family: 'Menlo', sans-serif;
    color: #ddd;
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
