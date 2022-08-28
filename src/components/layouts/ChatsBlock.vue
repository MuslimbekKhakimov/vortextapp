<template>
    <div class="chats-block">
        <div class="search-block">
            <SearchInputGroup></SearchInputGroup>
        </div>
        <div class="top-menu-horizontal-block">
            <TopMenuHorizantal 
                :menuItems="menuItems" 
                v-if="!searchState"
                :class="{search_deactivate:!searchState}"
            ></TopMenuHorizantal>
            <TopMenuHorizantal 
                :menuItems="menuSearchItems" 
                v-if="searchState"
                :class="{search_activate:searchState}"
            ></TopMenuHorizantal>
        </div>
        <div class="search-chat-users-block"
            v-if="searchState"
            :class="{search_activate:searchState}"
        >
            <SearchUsersPeer></SearchUsersPeer>
        </div>
        <div class="chat-users-block scrollbar-y"
             v-if="!searchState"
            :class="{search_deactivate:!searchState}">
            <UserPeer v-for="user in [1,2,3,4,5,6,7,8,9,7,8,5,4,5,6,9,7,8,9,8,7,8,9]"></UserPeer>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
import SearchInputGroup from '@/components/ui/SearchInputGroup.vue'
import TopMenuHorizantal from '@/components/ui/TopMenuHorizantal.vue'
import UserPeer from "@/components/ui/UserPeer.vue"
import SearchUsersPeer from "@/components/ui/SearchUsersPeer.vue"
export default {
    name: "ChatsBlock",
    beforeMount() {
        this.initialLeftSide()
    },
    methods: {
        ...mapMutations(['initialLeftSide'])
    },
    computed: {
        ...mapState({ searchState: state => state.leftSide.items.search }),
        ...mapGetters({ menuItems: 'getTopMenuItems' }),
        ...mapGetters({ menuSearchItems: 'getTopMenuSearchItems' })
    },
    components: {
        SearchInputGroup,
        TopMenuHorizantal,
        UserPeer,
        SearchUsersPeer
    }
}
</script>
<style>
.chats-block {
    height: 100%;
    max-width: 430px;
}

.search-block {
    background-color: var(--w);
    padding: 7px 15px 3px 15px;
}

.top-menu-horizontal-block {
    border-bottom: 1px solid var(--borders);
    overflow: hidden;
}

.chat-users-block {
    overflow-y: scroll;
    max-height: calc(100% - 103px);
    padding: 5px 0px 5px 5px;
}

.search_activate {
    transform-origin: center;
    animation: search_activate .15s ease-in-out;
}
@keyframes search_activate{
    from{
        transform: scale(1.2) translateY(-30%);
        opacity: 0;
    }
    to{
        transform: scale(1) translateY(0%);
        opacity: 1;
    }
}

.search_deactivate{
    transform-origin: center;
    animation: search_deactivate .15s ease-in-out;
}

@keyframes search_deactivate{
    from{
        transform: scale(.8) translateY(30%);
        opacity: 0;
    }
    to{
        transform: scale(1) translateY(0%);
        opacity: 1;
    }
}

</style>