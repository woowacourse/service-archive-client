<template>
  <div class="images">
    <div class="image" v-for="(file, index) in files" :key="index">
      <img :src="file" :alt="file">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Images",
    props: ["files"]
  }
</script>

<style scoped>
  .image {
    margin: 10px 0;
  }

  .image > img {
    max-width: 100%;
  }
</style>