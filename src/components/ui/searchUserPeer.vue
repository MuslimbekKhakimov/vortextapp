<template>
    <div class="search-user-peer">
        <effective class="search-user-peer-item" duration="0.5s">
            <a>
                <div class="search-peer-user-avatar">
                    <img src="@/assets/test-images/avatar.jpg" />
                </div>
                <div class="search-user-peer-caption">
                    <p>Abdukarim</p>
                    <p>...</p>
                </div>
            </a>
        </effective>
    </div>
</template>
<script>
export default {
    name: "SearchUserPeer"
}
</script>
<style>
.search-user-peer {
    width: auto;
}

.search-user-peer-item {
    border-radius: 8px;
    font-family: roboto-regular;
    font-size: 14px;
    margin-bottom: 4px;
    text-align: center;
}

.search-user-peer-item a {
    display: block;
    width: 100%;
    height: 100%;
    padding: 12px 7px;
}

.search-peer-user-avatar {
    padding: 0px 5px;
}

.search-peer-user-avatar img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    object-fit: cover;
}

.search-user-peer-caption {
    margin-top: 5px;
    display: flex;
}

.search-user-peer-caption p {
    width: auto;
}
</style>