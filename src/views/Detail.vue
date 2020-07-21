<template>
  <div class="detail">
    <div>
      <Conversation :conversation="conversation"/>
    </div>
    <div class="divider">
      <div class="line"></div>
      <div class="divider-title">댓글</div>
      <div class="line"></div>
    </div>
    <ReplyList :replies="conversation.replies"/>
  </div>
</template>

<script>
  import {fetchConversation} from "../api/conversations";
  import Conversation from "../components/Conversation";
  import ReplyList from "../components/ReplyList";

  export default {
    components: {
      ReplyList,
      Conversation,
    },
    data: () => ({
      conversation: {},
    }),
    created() {
      fetchConversation(this.$route.params.id).then(
          (res) => (this.conversation = res.data)
      );
    },
  };
</script>

<style scoped>
  .detail {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    background: #111;
  }

  .divider {
    display: flex;
    align-items: center;
    width: 100%;
    color: #fff;
    font-size: 20px;
  }

  .divider-title {
    margin: 0 20px;
  }

  .line {
    height: 1px;
    background: #fff;
    flex: 1;
  }
</style>
