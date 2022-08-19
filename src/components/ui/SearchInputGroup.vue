<template>
    <div class="input-group">
        <effective class="input-left-item" duration="0.5s">
            <span></span>
            <span></span>
            <span></span>
        </effective>
        <div class="search-input-group">
            <div class="search-icon">
                <img src="@/assets/images/search.svg" alt="search icon" />
            </div>
            <div class="search-input">
                <input type="text" placeholder="search" />
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "SearchInputGroup"
}
</script>
<style>
.input-group,
.search-input-group {
    display: flex;
    align-items: center;
}

.input-left-item {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.input-left-item span {
    width: 50%;
    border-bottom: 2.5px solid gray;
}

.input-left-item span:nth-child(2) {
    margin-top: 3px;
    margin-bottom: 3px;
}

.search-input-group {
    width: calc(100% - 45px);
}

.search-icon {
    width: 22px;
    height: 22px;
    z-index: 1;
    transform: translateX(12px) translateY(1px);
    text-align: center;
}

.search-icon img {
    width: 100%;
    height: auto;
}

.search-input {
    width: 100%;
    margin-left: -22px;
}

.search-input input {
    width: 100%;
    height: 42px;
    border-radius: 25px;
    border: 1px solid var(--secondary);
    font-family: roboto-regular;
    font-size: 19px;
    padding: 0px 20px 2px 40px;
}
</style>