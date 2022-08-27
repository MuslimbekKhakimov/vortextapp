<template>
    <div class="chats-block">
        <div class="search-block">
            <SearchInputGroup></SearchInputGroup>
        </div>
        <div class="top-menu-horizontal-block">
            <TopMenuHorizantal 
                :menuItems="menuItems" 
                v-if="!searchState"
            ></TopMenuHorizantal>
            <Transition name="search-activate">
                <TopMenuHorizantal 
                        :menuItems="menuSearchItems" 
                        v-if="searchState"
                ></TopMenuHorizantal>
            </Transition>
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
        </div>
    </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
import SearchInputGroup from '@/components/ui/SearchInputGroup.vue'
import TopMenuHorizantal from '@/components/ui/TopMenuHorizantal.vue'
import UserPeer from "@/components/ui/UserPeer.vue"
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
        UserPeer
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

.search-activate-enter-active{
    transition: transform .1s cubic-bezier(.4, 0, .2, 1);
}
.search-activate-enter-from{
    transform: scale(1.1);
}
.search-activate-enter-to{
    transform: scale(1);
}
</style>