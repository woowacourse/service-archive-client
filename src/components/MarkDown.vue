<template>
  <div v-html="render" class="message"></div>
</template>

<script>
  import marked from "marked"
  import highlight from "highlight.js"
  import java from "highlight.js/lib/languages/java"

  highlight.registerLanguage("java", java);

  marked.use({
    renderer: {
      code(text) {
        return `<code><pre>${highlight.highlight("java", text.replace(/\n\n/g, "\n")).value}</pre></code>`
      }
    }
  })
  export default {
    name: "MarkDown",
    props: {
      content: {
        default: "",
        type: String
      }
    },
    computed: {
      render() {
        const result = this.content.replace(/\n/g, '\n\n')
            .replace(/```/g, "\n```\n")
            .replace(/&gt;/g, ">")
            .replace(/&lt;/g, "<")
        return marked(result)
      }
    }
  }
</script>

<style>
  @import "~highlight.js/styles/atom-one-dark.css";

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

  blockquote {
    border-left: 3px solid #aaa;
    background: rgba(255, 255, 255, 0.1);
    padding: 0 10px;
  }

  @media screen and (max-width: 768px) {
    pre {
      padding: 10px;
    }
  }
</style>
