<template>
    <div class="input-group">
        <effective v-if="searchLeftIcon" @click="searchExit($event)" class="input-left-item" duration="0.5s"
            :class="{ inputLeftItemActivate: searchLeftIcon }">
            <svg viewBox="0 0 57 46" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.87868 20.8787C-0.292893 22.0503 -0.292893 23.9497 0.87868 25.1213L19.9706 44.2132C21.1421 45.3848 23.0416 45.3848 24.2132 44.2132C25.3848 43.0416 25.3848 41.1421 24.2132 39.9706L7.24264 23L24.2132 6.02944C25.3848 4.85786 25.3848 2.95837 24.2132 1.7868C23.0416 0.615224 21.1421 0.615224 19.9706 1.7868L0.87868 20.8787ZM56.5 20L3 20V26L56.5 26V20Z" />
            </svg>
        </effective>
        <div class="input-left-item" @focusout="barBtnMenu = false" tabindex="0" v-else>
            <effective class="input-left-item" @click="barBtnMenu = !barBtnMenu" duration="0.5s"
                :class="{ inputLeftItemActivate: !searchLeftIcon }">
                <span></span>
                <span></span>
                <span></span>
            </effective>
            <div class="bar-btn-menu" :class="{ bar_btn_menu_activate: barBtnMenu }">
                <div class="bar-btn-menu-list">
                    <ul>
                        <li class="bar-menu-list-item">
                            <div class="bar-menu-item-text-icon">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.75 16.25H14.25" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 13.713C2 8.082 2.64052 8.475 6.08825 5.41C7.5967 4.246 9.94388 2 11.9708 2C13.9967 2 16.3908 4.235 17.9128 5.41C21.3605 8.475 22 8.082 22 13.713C22 22 19.9564 22 12 22C4.04361 22 2 22 2 13.713Z" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div>saved messages</div>
                            </div>
                        </li>
                        <li class="bar-menu-list-item">
                            <div class="bar-menu-item-text-icon">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.75 16.25H14.25" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 13.713C2 8.082 2.64052 8.475 6.08825 5.41C7.5967 4.246 9.94388 2 11.9708 2C13.9967 2 16.3908 4.235 17.9128 5.41C21.3605 8.475 22 8.082 22 13.713C22 22 19.9564 22 12 22C4.04361 22 2 22 2 13.713Z" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div>contacts</div>
                            </div>
                        </li>
                        <li class="bar-menu-list-item" @click="darkMode = !darkMode">
                            <div class="bar-menu-item-text-icon">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.75 16.25H14.25" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 13.713C2 8.082 2.64052 8.475 6.08825 5.41C7.5967 4.246 9.94388 2 11.9708 2C13.9967 2 16.3908 4.235 17.9128 5.41C21.3605 8.475 22 8.082 22 13.713C22 22 19.9564 22 12 22C4.04361 22 2 22 2 13.713Z" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div>dark mode</div>
                            </div>
                            <div class="bar-menu-item-switch">
                                <Switch :action="darkMode"></Switch>
                            </div>
                        </li>
                        <li class="bar-menu-list-item" @click="animations = !animations">
                            <div class="bar-menu-item-text-icon">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.75 16.25H14.25" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 13.713C2 8.082 2.64052 8.475 6.08825 5.41C7.5967 4.246 9.94388 2 11.9708 2C13.9967 2 16.3908 4.235 17.9128 5.41C21.3605 8.475 22 8.082 22 13.713C22 22 19.9564 22 12 22C4.04361 22 2 22 2 13.713Z" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div>animations</div>
                            </div>
                            <div class="bar-menu-item-switch">
                                <Switch :action="animations"></Switch>
                            </div>
                        </li>
                        <li class="bar-menu-list-item">
                            <div class="bar-menu-item-text-icon">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.75 16.25H14.25" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 13.713C2 8.082 2.64052 8.475 6.08825 5.41C7.5967 4.246 9.94388 2 11.9708 2C13.9967 2 16.3908 4.235 17.9128 5.41C21.3605 8.475 22 8.082 22 13.713C22 22 19.9564 22 12 22C4.04361 22 2 22 2 13.713Z" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div>telegram features</div>
                            </div>
                        </li>
                        <li class="bar-menu-list-item">
                            <div class="bar-menu-item-text-icon">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.75 16.25H14.25" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 13.713C2 8.082 2.64052 8.475 6.08825 5.41C7.5967 4.246 9.94388 2 11.9708 2C13.9967 2 16.3908 4.235 17.9128 5.41C21.3605 8.475 22 8.082 22 13.713C22 22 19.9564 22 12 22C4.04361 22 2 22 2 13.713Z" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div>report bug</div>
                            </div>
                        </li>
                        <li class="bar-menu-list-item">
                            <div class="bar-menu-item-text-icon">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.75 16.25H14.25" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 13.713C2 8.082 2.64052 8.475 6.08825 5.41C7.5967 4.246 9.94388 2 11.9708 2C13.9967 2 16.3908 4.235 17.9128 5.41C21.3605 8.475 22 8.082 22 13.713C22 22 19.9564 22 12 22C4.04361 22 2 22 2 13.713Z" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div>android version</div>
                            </div>
                        </li>
                        <li class="bar-menu-list-item">
                            telegram version 1.0
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="search-input-group">
            <div class="search-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    :class="{ search_input_focus_icon: search }">
                    <path
                        d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16Z"
                        stroke="gray" stroke-width="2" stroke-miterlimit="10" />
                    <path d="M21.9999 22L13.9399 13.94" stroke="gray" stroke-width="2" stroke-miterlimit="10" />
                </svg>
            </div>
            <div class="search-input">
                <input type="text" placeholder="search" @focus="searchFocus($event)"
                    :class="{ search_input_focus_input: search }" @focusout="searchFocusOut($event)" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SearchInputGroup",
    data() {
        return {
            search: false,
            searchLeftIcon: false,
            barBtnMenu: false,
            darkMode:false,
            animations:true
        };
    },
    methods: {
        searchFocus(event) {
            this.searchLeftIcon = true;
            this.search = true;
        },
        searchFocusOut(event) {
            this.search = false;
        },
        searchExit(event) {
            this.searchLeftIcon = false;
            this.search = false;
        }
    }
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
    fill: gray;
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

.search_input_focus_input {
    border: 2px solid var(--primary) !important;
    caret-color: var(--primary);
}

.search_input_focus_icon path {
    stroke: var(--primary);
}

:root {
    --bar-btn-menu: cubic-bezier(.4, 0, .2, 1);
}

.bar-btn-menu {
    position: absolute;
    width: 300px;
    max-width: 300px;
    height: auto;
    background-color: rgba(255, 255, 255, .75);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    top: 55px;
    left: 14px;
    z-index: 1;
    padding: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .15);
    border-radius: 10px;
    visibility: hidden;
    opacity: 0;
    transform-origin: top, left;
    transform: scale(.8) translate(-12.5%, -12.5%);
    transition: opacity .3s var(--bar-btn-menu),
        transform .3s var(--bar-btn-menu),
        visibility .3s var(--bar-btn-menu);
    user-select: none;
    -webkit-user-select: none;
}

.bar_btn_menu_activate {
    visibility: visible;
    transform: scale(1) translate(0%, 0%);
    opacity: 1;
}

.inputLeftItemActivate {
    animation-name: inputLeftItemActivate;
    animation-duration: 0.1s;
    animation-timing-function: ease-out;
}

@keyframes inputLeftItemActivate {
    from {
        transform: rotate(180deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.bar-btn-menu-list ul .bar-menu-list-item {
    font-family: roboto-medium;
    font-size: 17px;
    padding: 7px 15px 8.5px 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.bar-btn-menu-list ul .bar-menu-list-item:hover {
    background-color: var(--secondary-hover);
}

.bar-btn-menu-list ul .bar-menu-list-item span {
    border: none;
}

.bar-menu-item-text-icon,
.bar-menu-item-switch {
    width: auto;
}

.bar-menu-item-switch .custom-switch {
    transform: translateY(2px);
}

.bar-btn-menu-list ul .bar-menu-list-item:last-child {
    display: inherit;
    text-align: center;
    color: gray;
    font-size: 15px;
    font-family: roboto-regular;
}
.bar-btn-menu-list ul .bar-menu-list-item:last-child:hover{
    background-color: transparent;
}
.bar-menu-item-text-icon{
    display: flex;
    align-items: center;
}
.bar-menu-item-text-icon div{
    width: auto;
}
.bar-menu-item-text-icon div:first-child{
    padding-right: 10px;
}
.bar-menu-item-text-icon svg{
    fill: transparent;
    transform: translateY(2px);
}
</style>