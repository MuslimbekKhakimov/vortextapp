<template>
    <div class="chats-block">
        <div class="search-block">
            <SearchInputGroup></SearchInputGroup>
        </div>
    </div>
</template>
<script>
import SearchInputGroup from '../ui/SearchInputGroup.vue'
export default {
    name: "ChatsBlock",
    components: {
        SearchInputGroup
    }
}
</script>
<style>
    .chats-block{
        height: 100%;
        background-color: red;
        max-width: 430px;
        width: 430px;
    }
    .search-block{
        background-color: var(--w);
        padding: 4px 15px;
    }
</style>