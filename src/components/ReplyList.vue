<template>
  <div class="replies">
    <Reply v-for="(reply, index) in replies" :key="index" :reply="reply"/>
  </div>
</template>
<script>
  import Reply from './Reply';

  export default {
    name: "ReplyList",
    props: ["replies"],
    components: {Reply}
  }
</script>

<style scoped>
  .replies {
    padding: 10px;
  }
</style>
