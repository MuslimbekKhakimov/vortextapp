<template>
    <effective class="chatlist-chat" @click="userPeer" duration="0.7s">
        <a class="chat-user-peer" ref="chatListUserPeer">
            <div class="chat-list-user-avatar">
                <img src="@/assets/test-images/avatar.jpg">
            </div>
            <div class="chat-list-user-caption">
                <div class="chat-list-title">
                    <div class="chat-list-user-title">
                        <p>
                            lorem lorem lorem lorem lorem lorem lorem lorem
                        </p>
                    </div>
                    <div class="chat-list-status">
                        <span>status</span>
                    </div>
                </div>
                <div class="chat-list-sub-title">
                    Voice
                </div>
            </div>
        </a>
    </effective>
</template>
<script>
export default {
    name: "UserPeer",
    methods: {
        userPeer() {
            let exsistPeer = document.querySelector(".chat-list-chat-peer")
            if (exsistPeer) {
                exsistPeer.classList.remove("chat-list-chat-peer")
            }
            this.$refs.chatListUserPeer.classList.add("chat-list-chat-peer")
        }
    },
}
</script>
<style>
.chatlist-chat {
    border-radius: 7px;
}

.chat-user-peer {
    display: block;
    width: 100%;
    height: 100%;
    padding: 8px 9px;
    display: flex;
    align-items: center;
    user-select: none;
}

.chat-list-user-avatar {
    width: 55px;
    height: 55px;
}

.chat-list-user-caption {
    width: calc(100% - 55px);
    padding: 0px 10px;
}

.chat-list-user-avatar img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    object-fit: cover;
}

.chat-list-chat-peer {
    background-color: var(--primary);
    color: var(--w);
}

.chat-list-title {
    display: flex;
    justify-content: space-between;
}

.chat-list-user-title,
.chat-list-status {
    width: auto;
}

.chat-list-user-title {
    white-space: nowrap;
    overflow: hidden;
}

.chat-list-status {
    margin-left: 5px;
}
</style>