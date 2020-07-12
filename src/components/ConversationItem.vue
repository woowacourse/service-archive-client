<template>
  <v-list-item style="background: #333" class="rounded-xl">
    <v-list-item-content>
      <v-list-item-title v-text="conversation.message"></v-list-item-title>
      <v-list-item-subtitle class="text--primary"
                            v-text="conversation.userId"></v-list-item-subtitle>
      <v-list-item-subtitle
        v-text="$moment(conversation.conversationTime).format('YYYY-MM-DD HH:mm')"></v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
  export default {
    props: ['conversation']
  };
</script>
