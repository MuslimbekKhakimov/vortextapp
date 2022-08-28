<template>
    <div class="search-users-scrollable">
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
    padding: 4px 0px 0px 0px;
    border-bottom: 1px solid var(--borders);
    -webkit-touch-callout: none; 
    user-select: none;
}

.search-users-scrollable::-webkit-scrollbar {
    display: none;
}

.search-user-peer {
    width: auto;
}

.search-user-peer-item {
    padding: 12px 7px;
    border-radius: 8px;
    font-family: roboto-regular;
    font-size: 14px;
    margin-bottom: 4px;
    text-align: center;
}

.search-user-peer-item  a {
    display: block;
    width: 100%;
    height: 100%;
}

.search-peer-user-avatar{
    padding: 0px 5px;
}

.search-peer-user-avatar img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    object-fit: cover;
}
.search-user-peer-caption{
    margin-top: 5px;
    display: flex;
}
.search-user-peer-caption p{
    width: auto;
}
</style>