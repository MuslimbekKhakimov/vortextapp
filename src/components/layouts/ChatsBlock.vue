<template>
    <div class="chats-block">
        <div class="search-block">
            <SearchInputGroup></SearchInputGroup>
        </div>
        <div class="top-menu-horizontal-block">
            <TopMenuHorizantal></TopMenuHorizantal>
        </div>
    </div>
</template>
<script>
import SearchInputGroup from '@/components/ui/SearchInputGroup.vue'
import TopMenuHorizantal from '@/components/ui/TopMenuHorizantal.vue'
export default {
    name: "ChatsBlock",
    components: {
        SearchInputGroup,
        TopMenuHorizantal
    }
}
</script>
<style>
    .chats-block{
        height: 100%;
        background-color: red;
        max-width: 430px;
        width: 430px;
        display: flex;
        flex-direction: column;
    }
    .search-block{
        background-color: var(--w);
        padding: 3px 15px;
    }
</style>