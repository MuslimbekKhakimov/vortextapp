<template>
    <section class="whole-page">
        <ChatsBlock></ChatsBlock>
        <MessagesBlock></MessagesBlock>
    </section>
</template>
<script>
import ChatsBlock from '@/components/layouts/ChatsBlock.vue'
import MessagesBlock from '@/components/layouts/MessagesBlock.vue';
export default {
    name: "WholePage",
    components: {
        ChatsBlock,
        MessagesBlock
    }
}
</script>
<style>
.whole-page {
    position: relative;
    widows: 100%;
    height: 100%;
    display: flex;
}
</style>