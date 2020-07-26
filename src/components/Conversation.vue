<template>
  <div class="conversation">
    <div class="information">
      <div class="member">
        <img :src="conversation.member && conversation.member.avatar" alt="member-image"/>
        <div class="member-name">{{ conversation.member && conversation.member.displayName }}</div>
      </div>
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
    align-items: center;
    margin-bottom: 8px;
  }

  .member {
    display: flex;
    align-items: center;
  }

  .member > img {
    height: 48px;
    width: 48px;
    border-radius: 6px;
    margin-right: 10px;
  }

  .member-name {
    padding: 3px;
  }

  .datetime {
    color: #aaa;
    padding: 3px;
  }
</style>
