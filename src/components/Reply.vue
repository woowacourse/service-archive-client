<template>
  <div class="reply">
    <div class="information">
      <div class="member">
        <img :src="reply.member.avatar" alt="member-image">
        <div class="member-name">{{ reply.member.displayName }}</div>
      </div>
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
    components: {Images, MarkDown},
    props: ["reply"]
  }
</script>

<style scoped>
  .reply {
    display: flex;
    flex-direction: column;
    background: #333;
    width: 90vw;
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
