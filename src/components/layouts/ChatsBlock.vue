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

        <div class="chat-tab-folder-items-block">

            <div class="chat-folder-chat-items"
                v-if="!searchState"
                :class="{search_deactivate:!searchState}"
                >
                <div class="tab-chat-items tab-folder-items scrollbar-y" 
                    v-for="test in tests">
                    <h1 style="text-align:center;"> test {{test.name}}</h1>
                    <UserPeer v-for="user in [1,2,3,4,5,6,7,8,9,5,7,8,5,6,3,6,6]"></UserPeer>
                </div>
            </div>

            <div class="chat-folders-search-items"
                v-if="searchState"
                :class="{search_activate:searchState}"
                >
                <div class="tab-folder-items" v-for="test in tests2">
                    <h1 style="text-align:center;"> test {{test.name}}</h1>
                    <SearchUsersPeer></SearchUsersPeer>
                </div>
            </div>

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
    data() {
        return {
            tests:[
                {name:"all", filter:"all"},
                {name:"users", filter:"users"},
                {name:"messages", filter:"messages"},
                {name:"groups", filter:"groups"},
                {name:"channels", filter:"channels"},
                {name:"bots", filter:"bots"},
            ],
            tests2:[{name:"chats"},{name:"medias"},{name:"links"},{name:"files"},{name:"musics"},{name:"voices"}],
        }
    },
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

.chat-tab-folder-items-block{
    overflow: hidden;
    height: calc(100% - 103px);
    max-height: calc(100% - 103px);
}

.chat-folder-chat-items,.chat-folders-search-items{
    display: flex;
    height: 100%;
    overflow: hidden;
}

.tab-chat-items{
    overflow-y: scroll;
    height: 100%;
    padding: 7px 2px 7px 7px;
}

.tab-folder-items{
    min-width: 100%;
}

.search_activate {
    transform-origin: center;
    animation: search_activate .1s ease-in-out;
}

@keyframes search_activate{
    from{
        transform: scale(1.1) translate3d(0px, -30px, 0px);
        opacity: 0;
    }
    to{
        transform: scale(1) translate3d(0px, 0px, 0px);
        opacity: 1;
    }
}

.search_deactivate{
    transform-origin: center;
    animation: search_deactivate .1s ease-in-out;
}

@keyframes search_deactivate{
    from{
        transform:scale(.9) translate3d(0px, 30px, 0px);
        opacity: 0;
    }
    to{
        transform:scale(1)  translate3d(0px, 0px, 0px);
        opacity: 1;
    }
}

.tab-folder-activate-v-enter-active,
.tab-folder-activate-v-leave-active {
  transition: transform .5s ease-in-out;
}

.tab-folder-activate-v-enter-from{
    transform: translateX(0%);
}
.tab-folder-activate-v-leave-to {
    transform: translateX(-100%);
}

.tab-folder-activate{
    animation: tab-folder-activate;
    animation-duration: .5s;
    animation-timing-function: ease-in-out;
}

@keyframes tab-folder-activate{
    from {
        transform: translateX(0%);
    }
    to{
        transform: translateX(-100%);
    }
}

</style>