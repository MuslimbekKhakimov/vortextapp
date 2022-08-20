<template>
    <effective class="chatlist-chat" @click="userPeer" duration="0.7s">
        <a class="chat-user-peer"  ref="chatListUserPeer" >
            <div class="chat-list-user-avatar">
                <img src="@/assets/test-images/avatar.jpg">
            </div>
            <div class="chat-list-user-caption" style="font-family:roboto-medium; font-size:18px;">
                <p>Abdukarim</p>
                <p>Voice</p>
            </div>
        </a>
    </effective>
</template>
<script>
export default {
    name:"UserPeer",
    methods: {
        userPeer(){
            let exsistPeer = document.querySelector(".chat-list-chat-peer")
            if(exsistPeer){
                exsistPeer.classList.remove("chat-list-chat-peer")
            }
            this.$refs.chatListUserPeer.classList.add("chat-list-chat-peer")
        }
    },
}
</script>
<style>
    .chatlist-chat{
        border-radius: 7px;
    }
    .chat-user-peer{
        display: block;
        width: 100%;
        height: 100%;
        padding: 8px 9px;
        display: flex;
        align-items: center;
        user-select: none;
    }
    .chat-list-user-avatar{
        width: 55px;
        height: 55px;
    }
    .chat-list-user-caption{
        width: calc(100% - 55px);
        padding: 0px 10px;
    }
    .chat-list-user-avatar img{
        width: 55px;
        height: 55px;
        border-radius: 50%;
        object-fit: cover;
    }
    .chat-list-chat-peer{
        background-color: var(--primary);
        color:var(--w);
    }
</style>