<template>
    <div class="chats-block">
        <div class="search-block">
            <SearchInputGroup></SearchInputGroup>
        </div>
        <div class="top-menu-horizontal-block">
            <TopMenuHorizantal></TopMenuHorizantal>
        </div>
        <div class="chat-users-block scrollbar-y">
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            <UserPeer></UserPeer>
            p
        </div>
    </div>
</template>
<script>
import SearchInputGroup from '@/components/ui/SearchInputGroup.vue'
import TopMenuHorizantal from '@/components/ui/TopMenuHorizantal.vue'
import UserPeer from "@/components/ui/UserPeer.vue"
export default {
    name: "ChatsBlock",
    components: {
        SearchInputGroup,
        TopMenuHorizantal,
        UserPeer
    }
}
</script>
<style>
    .chats-block{
        height: 100%;
        max-width: 430px;
    }
    .search-block{
        background-color: var(--w);
        padding: 7px 15px 3px 15px;
    }
    .top-menu-horizontal-block{
        border-bottom: 1px solid var(--borders);
        overflow: hidden;
    }
    .chat-users-block{
        overflow-y: scroll;
        max-height: calc(100% - 103px);
        padding: 5px 0px 5px 5px;
    }
</style>