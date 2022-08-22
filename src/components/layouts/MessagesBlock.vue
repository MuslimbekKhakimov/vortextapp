<template>
    <div class="messages-block">
        2
    </div>
</template>
<script>
export default {
    name: "MessagesBlock",
    data() {
        return {
            testing:false
        }
    },
    methods: {
        test(event){
            console.log("focus")
        },
        focusout(event){
            console.log("focus out")
        }
    }
}
</script>
<style>
    .messages-block{
        height: 100%;
        max-width: calc(100% - 430px);
        width: calc(100% - 430px);
        background-color: green;
    }
</style>