<template>
    <div class="search-users-scrollable">
        <div class="search-user-peer">
            <effective class="search-user-peer-item" duration="0.5s">
                <div class="search-peer-user-avatar">
                    <img src="@/assets/test-images/avatar.jpg" />
                </div>
            </effective>
        </div>
        <div class="search-user-peer">
            <effective class="search-user-peer-item" duration="0.5s">
                <div class="search-peer-user-avatar">
                    <img src="@/assets/test-images/avatar.jpg" />
                </div>
            </effective>
        </div>
        <div class="search-user-peer">
            <effective class="search-user-peer-item" duration="0.5s">
                <div class="search-peer-user-avatar">
                    <img src="@/assets/test-images/avatar.jpg" />
                </div>
            </effective>
        </div>
        <div class="search-user-peer">
            <effective class="search-user-peer-item" duration="0.5s">
                <div class="search-peer-user-avatar">
                    <img src="@/assets/test-images/avatar.jpg" />
                </div>
            </effective>
        </div>
        <div class="search-user-peer">
            <effective class="search-user-peer-item" duration="0.5s">
                <div class="search-peer-user-avatar">
                    <img src="@/assets/test-images/avatar.jpg" />
                </div>
            </effective>
        </div>
        <div class="search-user-peer">
            <effective class="search-user-peer-item" duration="0.5s">
                <div class="search-peer-user-avatar">
                    <img src="@/assets/test-images/avatar.jpg" />
                </div>
            </effective>
        </div>
        <div class="search-user-peer">
            <effective class="search-user-peer-item" duration="0.5s">
                <div class="search-peer-user-avatar">
                    <img src="@/assets/test-images/avatar.jpg" />
                </div>
            </effective>
        </div>
        <div class="search-user-peer">
            <effective class="search-user-peer-item" duration="0.5s">
                <div class="search-peer-user-avatar">
                    <img src="@/assets/test-images/avatar.jpg" />
                </div>
            </effective>
        </div>
        <div class="search-user-peer">
            <effective class="search-user-peer-item" duration="0.5s">
                <div class="search-peer-user-avatar">
                    <img src="@/assets/test-images/avatar.jpg" />
                </div>
            </effective>
        </div>
        <div class="search-user-peer">
            <effective class="search-user-peer-item" duration="0.5s">
                <div class="search-peer-user-avatar">
                    <img src="@/assets/test-images/avatar.jpg" />
                </div>
            </effective>
        </div>
        <div class="search-user-peer">
            <effective class="search-user-peer-item" duration="0.5s">
                <div class="search-peer-user-avatar">
                    <img src="@/assets/test-images/avatar.jpg" />
                </div>
            </effective>
        </div>
        <div class="search-user-peer">
            <effective class="search-user-peer-item" duration="0.5s">
                <div class="search-peer-user-avatar">
                    <img src="@/assets/test-images/avatar.jpg" />
                </div>
            </effective>
        </div>
    </div>
</template>
<script>
export default {
    name: "SearchUsersPeer"
}
</script>
<style>
.search-users-scrollable {
    overflow-x: scroll;
    display: flex;
    flex-direction: row;
}

.search-users-scrollable::-webkit-scrollbar {
    display: none;
}

.search-user-peer {
    width: auto;
}

.search-user-peer-item {
    padding: 12px 16px;
    border-radius: 8px;
    font-family: roboto-medium;
    font-size: 18px;
    color: gray;
    margin-bottom: 4px;
}

.search-peer-user-avatar img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    object-fit: cover;
}
</style>