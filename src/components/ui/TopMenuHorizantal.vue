<template>
    <div class="top-menu-scrollable">
        <div class="top-menu-items" v-for="(menuitem, index) in menuItems" :key="index">
            <effective class="top-menu-item" duration="0.5s">
                <p>
                    <span>{{ menuitem.name }}</span>
                    <badge class="top-menu-badge">{{ index + 1 }}</badge>
                </p>
            </effective>
        </div>
        <div class="top-menu-tab-line"></div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: "TopMenuHorizantal",
    props: {
        menuItems: Object
    },
    mounted() {
        this.tab()
    },
    methods: {
        ...mapMutations(['setScollMenuClickIndex']),
        tab() {
            let setIndex = this.setScollMenuClickIndex
            let topMenuItems = document.querySelectorAll(".top-menu-item");
            let scrollable = document.querySelector(".top-menu-scrollable");
            let tabline = document.querySelector(".top-menu-tab-line");
            let initialcalcTablineLeft = topMenuItems[0].offsetLeft + ((topMenuItems[0].offsetWidth - topMenuItems[0].querySelector("p").offsetWidth) / 2) - 4;
            let initialcalcTablineWidth = topMenuItems[0].querySelector("p").offsetWidth + 8;
            tabline.style = `
                width:${initialcalcTablineWidth}px;
                transform:translateX(${initialcalcTablineLeft}px);
            `
            topMenuItems[0].classList.add("tab-to")
            topMenuItems.forEach((e, index) => {
                e.addEventListener("click", function () {
                    let calcLeftofScrollable = this.offsetLeft - (scrollable.clientWidth / 2) + (this.offsetWidth / 2)
                    let calcTablineLeft = this.offsetLeft + ((this.offsetWidth - this.querySelector("p").offsetWidth) / 2) - 4;
                    let calcTablineWidth = this.querySelector("p").offsetWidth + 8;
                    tabline.style = `
                        width:${calcTablineWidth}px;
                        transform:translateX(${calcTablineLeft}px);
                    `
                    let tabto = document.querySelector(".tab-to")
                    if (tabto) {
                        tabto.classList.remove("tab-to")
                    }
                    let tabripple = document.querySelector(".ripple-tab-to")
                    if (tabripple) {
                        tabripple.classList.remove("ripple-tab-to");
                    }
                    this.classList.add("tab-to")
                    this.querySelector(".ripple").classList.add("ripple-tab-to")
                    setIndex(index)
                    setTimeout(() => {
                        scrollable.scrollLeft = calcLeftofScrollable
                    }, 500)
                })
            })
        }
    },  
    computed: {
        ...mapState({ animations: state => state.leftSide.items.StorageItems.animations })
    }
}
</script>
<style>
.top-menu-scrollable {
    overflow-x: scroll;
    display: flex;
    flex-direction: row;
    position: relative;
    padding-right: 10px;
    scroll-behavior: smooth;
}

.top-menu-scrollable::-webkit-scrollbar {
    display: none;
}

.top-menu-items:first-child {
    margin-left: 10px;
}

.top-menu-items {
    width: auto;
    -webkit-touch-callout: none;
    user-select: none;
}

.top-menu-item {
    padding: 12px 16px;
    border-radius: 8px;
    font-family: roboto-medium;
    font-size: 18px;
    color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
}

.top-menu-tab-line {
    position: absolute;
    width: 30px;
    height: 4px;
    background-color: var(--primary);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    transition: all .7s;
    bottom: 0px;
}

.tab-to {
    color: var(--primary);
}

.tab-to:hover {
    background-color: #eff6fe !important;
}

.top-menu-badge {
    margin-left: 7px;
    background-color: var(--primary);
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;

}
</style>