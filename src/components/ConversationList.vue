<template>
  <div class="conversations">
    <ConversationItem
      v-for="(conversation, index) in conversations"
      :key="generate(index)"
      :conversation="conversation"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import ConversationItem from "./ConversationItem";

export default {
  props: ["conversations"],
  components: {
    ConversationItem,
  },
  methods: {
    generate: () => nanoid(),
  },
};
</script>
