<template>
  <RouterLink :to="`/conversations/${conversation.id}`">
    <div class="conversation">
      <Markdown :content="conversation.message"/>
      <Images :files="conversation.files"/>
      <div class="info">
        <img :src="conversation.member.avatar" alt="member-image"/>
        <div>
          <div class="member">{{ conversation.member.displayName }}</div>
          <div class="datetime">
            {{ $moment(conversation.conversationTime).format("MMMM, DD, YYYY") }}
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script>
  import Images from "./Images";
  import Markdown from "./MarkDown";

  export default {
    components: {Images, Markdown},
    props: ["conversation"],
  };
</script>

<style scoped>
  .conversation {
    display: flex;
    flex-direction: column;
    background: #333;
    width: 90vw;
    max-width: 960px;
    margin: 20px;
    padding: 15px;
    color: #ddd;
    word-break: break-all;
    border-radius: 15px;
  }

  .info {
    display: flex;
    align-items: center;
  }

  .info > img {
    height: 48px;
    width: 48px;
    border-radius: 6px;
    margin-right: 10px;
  }

  .member {
    padding: 3px;
  }

  .datetime {
    color: #aaa;
    padding: 3px;
  }
</style>
