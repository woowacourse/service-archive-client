<template>
    <v-list two-line style="background: inherit">
        <v-list-item-group style="background: inherit">
            <div v-for="(conversation, index) in conversations" :key="generate(index)">
                <ConversationItem :conversation="conversation" />
                <div class="mb-5"></div>
            </div>
        </v-list-item-group>
    </v-list>
</template>

<script>
    import { nanoid } from "nanoid"
    import ConversationItem from "./ConversationItem";
    export default {
        props: ['conversations'],
        components: {
            ConversationItem
        },
        methods: {
            generate: () => nanoid()
        }
    };
</script>
