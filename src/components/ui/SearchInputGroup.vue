<template>
    <div class="input-group">
        <effective v-if="searchLeftIcon" @click="searchExit($event)" class="input-left-item" duration="0.5s">
            <svg  viewBox="0 0 57 46"  xmlns="http://www.w3.org/2000/svg">
                <path d="M0.87868 20.8787C-0.292893 22.0503 -0.292893 23.9497 0.87868 25.1213L19.9706 44.2132C21.1421 45.3848 23.0416 45.3848 24.2132 44.2132C25.3848 43.0416 25.3848 41.1421 24.2132 39.9706L7.24264 23L24.2132 6.02944C25.3848 4.85786 25.3848 2.95837 24.2132 1.7868C23.0416 0.615224 21.1421 0.615224 19.9706 1.7868L0.87868 20.8787ZM56.5 20L3 20V26L56.5 26V20Z" />
            </svg>
        </effective>
        <div class="input-left-item" @focusout="barBtnMenu = false" 
                                     tabindex="0" v-else>
            <effective  class="input-left-item" @click="barBtnMenu = !barBtnMenu" duration="0.5s">
                <span></span>
                <span></span>
                <span></span>
            </effective>
            <div class="bar-btn-menu" :class="{bar_btn_menu_activate:barBtnMenu}">
                <ul>
                    <li>Menu1</li>
                    <li>Menu2</li>
                    <li>Menu3</li>
                    <li>Menu4</li>
                    <li>Menu5</li>
                    <li>Menu6</li>
                    <li>Menu7</li>
                    <li>Menu8</li>
                    <li>Menu9</li>
                    <li>Menu10</li>
                    <li>Menu11</li>
                    <li>Menu12</li>
                    <li>Menu13</li>
                    <li>Menu14</li>
                </ul>
            </div>
        </div>
        <div class="search-input-group">
            <div class="search-icon">
                <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                :class="{search_input_focus_icon:search}">
                    <path d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16Z" stroke="gray" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M21.9999 22L13.9399 13.94" stroke="gray" stroke-width="2" stroke-miterlimit="10"/>
                </svg>
            </div>
            <div class="search-input">
                <input type="text" placeholder="search" @focus="searchFocus($event)"
                :class="{search_input_focus_input:search}" @focusout="searchFocusOut($event)"/>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "SearchInputGroup",
    data() {
        return {
            search:false,
            searchLeftIcon: false,
            barBtnMenu:false
        }
    },
    methods: {
        searchFocus(event){
            this.searchLeftIcon = true
            this.search = true
        },
        searchFocusOut(event){
            this.search = false
        },
        searchExit(event){
            this.searchLeftIcon = false
            this.search = false
        }
    },
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

.input-left-item svg {
    width: 23px;
    height: 23px;
    fill:gray;
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

.search-icon svg {
    width: 22px;
    height: 22px;
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
    transition: border 0.3s ease;
}

.search_input_focus_input{
    border: 2px solid var(--primary) !important;
    caret-color: var(--primary);
}
.search_input_focus_icon path{
    stroke: var(--primary);
}

:root{
    --bar-btn-menu:cubic-bezier(.4,0,.2,1);
}
.bar-btn-menu{
    position: absolute;
    width: 300px;
    height: 350px;
    background-color: rgba(255,255,255, .75);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(5px);
    top:55px;
    left:15px;
    z-index: 1;
    box-shadow: 0px 0px 10px rgba(0,0,0,.15);
    border-radius: 10px;
    visibility: hidden;
    transform: scale(.8) translateY(10%);
    opacity: 0;
    transition: opacity .2s var(--bar-btn-menu),
                transform .2s var(--bar-btn-menu),
                visibility .2s var(--bar-btn-menu);
}
.bar_btn_menu_activate{
    visibility: visible;
    transform: scale(1) translateY(0%);
    opacity: 1;
}
/* vue transitions */
</style>