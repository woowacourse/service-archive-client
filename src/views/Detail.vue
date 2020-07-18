<template>
  <div class="detail">
    <Header @clickMenu="drawer = !drawer"/>
    <SideBar :drawer="drawer">
      <OptionContainer
        title="기수"
        :options="generations"
        slot="generation"
        @clickOption="handleGenerationOption"
      />
      <OptionContainer
        title="레벨"
        :options="levels"
        slot="level"
        @clickOption="handleLevelOption"
      />
      <Button @click="submit">적용</Button>
    </SideBar>
    <div class="main">
      <Conversation :conversation="conversation"/>
      <div class="divider">
        <div class="line"></div>
        <div class="divider-title">댓글</div>
        <div class="line"></div>
      </div>
      <ReplyList :replies="conversation.replies"/>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header';
  import SideBar from '../components/SideBar';
  import OptionContainer from '../components/OptionContainer';
  import Button from '../components/Button';
  import { fetchConversation } from '../api/conversations';
  import Conversation from '../components/Conversation';
  import ReplyList from '../components/ReplyList';

  export default {
    components: { ReplyList, Conversation, Header, SideBar, OptionContainer, Button },
    data: () => ({
      drawer: false,
      generations: [
        {
          select: false,
          text: "1기",
        },
        {
          select: false,
          text: "2기",
        },
      ],
      levels: [
        {
          select: false,
          text: "1",
        },
        {
          select: false,
          text: "2",
        },
        {
          select: false,
          text: "3",
        },
        {
          select: false,
          text: "4",
        },
      ],
      conversation: {}
    }),
    created() {
      fetchConversation(this.$route.params.id)
      .then(res => this.conversation = res.data)
    },
    methods: {
      handleGenerationOption(index) {
        this.generations[index].select = !this.generations[index].select;
      },
      handleLevelOption(index) {
        this.levels[index].select = !this.levels[index].select;
      },
      submit() {
        this.drawer = false;
      },
    },
  }
</script>

<style scoped>
  .detail {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #111;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    word-break: break-all;
    overflow: auto;
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
