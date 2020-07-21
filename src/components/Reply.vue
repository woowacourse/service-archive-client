<template>
  <div class="reply">
    <div class="information">
      <div class="user">{{reply.userId}}</div>
      <div class="datetime">
        {{ $moment(reply.conversationTime).format("MMMM, DD, YYYY") }}
      </div>
    </div>
    <MarkDown :content="reply.message"/>
    <Images :files="reply.files"/>
  </div>
</template>

<script>
  import MarkDown from './MarkDown';
  import Images from "./Images";

  export default {
    name: "Reply",
    components: { Images, MarkDown },
    props: ["reply"]
  }
</script>

<style scoped>
  .reply {
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

  .user {
    padding: 3px;
  }

  .datetime {
    color: #aaa;
    padding: 3px;
  }
</style>
