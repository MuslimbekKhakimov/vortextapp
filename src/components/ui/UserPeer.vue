<template>
    <effective class="chatlist-chat" @click="userPeer" duration="0.7s">
        <a class="chat-user-peer" ref="chatListUserPeer">
            <div class="chat-list-user-avatar">
                <img src="@/assets/test-images/avatar.jpg">
            </div>
            <div class="chat-list-user-caption">
                <div class="chat-list-user-dialog">
                    <div class="chat-list-dialog-title">
                        <div class="chat-list-user">
                            <div class="chat-list-user-title">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta totam, autem incidunt laboriosam asperiores ducimus debitis. Ex quidem nobis blanditiis vel illum nemo voluptatum modi neque dolores. Officia, ipsa harum.
                                </p>
                            </div>
                            <div class="chat-list-user-title-right-items">
                                <p>
                                    ...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="chat-list-dialog-status">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
                                 <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                            </svg>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                            </svg>
                        </span>
                        <span>
                            monday
                        </span>
                    </div>
                </div>
                <div class="chat-list-user-dialog">
                    <div class="chat-list-dialog-title">
                        <div class="chat-list-user">
                            <div class="chat-list-user-title chat-list-last-message">
                                <p>
                                    <span>Djon:</span>
                                    Hi Abdukarim ! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est repellat, eum assumenda sequi consectetur obcaecati? Atque, recusandae dolor temporibus fuga facere, deserunt maxime cumque rem quasi, libero rerum amet sit.
                                </p>
                            </div>
                            <div class="chat-list-user-title-right-items">
                                <p>
                                    ...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="chat-list-dialog-status">
                        <badge style="background-color:var(--primary);">123</badge>
                    </div>
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
    max-width: calc(100% - 55px);
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
}
.chat-list-chat-peer * {
     color: var(--w) !important;
     fill:var(--w);
}
.chat-list-chat-peer .badge{
    background-color: var(--w) !important;
    color: var(--primary)  !important;
}

.chat-list-user-dialog {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.chat-list-user-dialog:nth-child(2){
    margin-top: 3px;
}

.chat-list-dialog-title,
.chat-list-dialog-status {
    width: auto;
}

.chat-list-dialog-title {
    flex-grow: 1;  
    white-space: nowrap;
    overflow: hidden; 
}

.chat-list-dialog-status {
    margin-left: 10px;
}
/**/ 
.chat-list-user{
    max-width: 100%;
    display: flex;
}
.chat-list-user-title,.chat-list-user-title-right-items{
     width: auto;   
}
.chat-list-user-title{
    white-space: nowrap;
    overflow: hidden;
    font-family: roboto-medium;
    font-size: 18px;
}
.chat-list-dialog-status{
    font-family: roboto-regular;
    color:gray;
    font-size: 14px;
    display: flex;
    align-items: center;
}
.chat-list-dialog-status span svg{
    width: 22px;
    height: 22px;
    fill:var(--success);
    transform: translateY(3px);
}
.chat-list-last-message{
    font-family: roboto-regular;
    font-size: 15px;
    color:gray;
}
.chat-list-last-message span{
    color: var(--b);
    font-size: 16px;
}
</style>