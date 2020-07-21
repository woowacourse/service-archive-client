<template>
  <div class="conversation">
    <div class="information">
      <div class="user">{{conversation.userId}}</div>
      <div class="datetime">
        {{ $moment(conversation.conversationTime).format("MMMM, DD, YYYY") }}
      </div>
    </div>
    <MarkDown :content="conversation.message"/>
    <Images :files="conversation.files"/>
  </div>
</template>

<script>
  import Images from "./Images";
  import MarkDown from "./MarkDown";

  export default {
    name: "Conversation",
    components: {MarkDown, Images},
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
    margin: 20px;
    padding: 15px;
    color: #fff;
    word-break: break-all;
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
