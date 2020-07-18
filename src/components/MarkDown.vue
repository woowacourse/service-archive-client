<template>
  <div v-html="render" class="message"></div>
</template>

<script>
  import marked from "marked"

  export default {
    name: "MarkDown",
    props: ["content"],
    computed: {
      render() {
        const result = this.content.replace(/```/g, "\n```\n")
        return marked(result)
      }
    }
  }
</script>

<style>
  pre {
    background: #111;
    overflow: auto;
    padding: 20px;
  }

  pre > code {
    font-family: 'Menlo', sans-serif;
  }

  .message > p {
    font-family: 'Menlo', sans-serif;
    color: #ddd;
    font-size: 20px;
    padding: 3px;
  }

  .message a {
    color: aqua;
  }

  @media screen and (max-width: 768px) {
    pre {
      padding: 10px;
    }
  }
</style>
