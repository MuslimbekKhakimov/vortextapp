<template>
    <div class="search-users-scrollable">
        <SearchUserPeer v-for="user in [1,2,3,4,5,6,7,8,9]"></SearchUserPeer>
    </div>
</template>
<script>
import SearchUserPeer from "@/components/ui/SearchUserPeer.vue"
export default {
    name: "SearchUsersPeer",
    components:{
        SearchUserPeer
    }

}
</script>
<style>
.search-users-scrollable {
    overflow-x: scroll;
    display: flex;
    flex-direction: row;
    padding: 4px 0px 0px 0px;
    border-bottom: 1px solid var(--borders);
    -webkit-touch-callout: none; 
    user-select: none;
}

.search-users-scrollable::-webkit-scrollbar {
    display: none;
}
</style>