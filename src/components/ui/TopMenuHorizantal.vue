<template>
    <div class="top-menu-scrollable">
        <div class="top-menu-items">
            <effective class="top-menu-item" duration="0.5s">
                <p>
                    <span>all</span>
                    <badge class="top-menu-badge">99999</badge>
                </p>
            </effective>
        </div>
        <div class="top-menu-items">
            <effective class="top-menu-item" duration="0.5s">
                <p>
                    <span>foydalanuvchilar</span>
                    <badge class="top-menu-badge">99999</badge>
                </p>
            </effective>
        </div>
        <div class="top-menu-items">
            <effective class="top-menu-item" duration="0.5s">
                <p>
                    <span>messages</span>
                    <badge class="top-menu-badge">1</badge>
                </p>
            </effective>
        </div>
        <div class="top-menu-items">
            <effective class="top-menu-item" duration="0.5s">
                <p>
                    <span>users</span>
                    <badge class="top-menu-badge">99999</badge>
                </p>
            </effective>
        </div>
        <div class="top-menu-items">
            <effective class="top-menu-item" duration="0.5s">
                <p>channels</p>
            </effective>
        </div>
        <div class="top-menu-items">
            <effective class="top-menu-item" duration="0.5s">
                <p>bots</p>
            </effective>
        </div>
        <div class="top-menu-items">
            <effective class="top-menu-item" duration="0.5s">
                <p>all</p>
            </effective>
        </div>
        <div class="top-menu-items">
            <effective class="top-menu-item" duration="0.5s">
                <p>users</p>
            </effective>
        </div>
        <div class="top-menu-items">
            <effective class="top-menu-item" duration="0.5s">
                <p>messages</p>
            </effective>
        </div>
        <div class="top-menu-items">
            <effective class="top-menu-item" duration="0.5s">
                <p>groups</p>
            </effective>
        </div>
        <div class="top-menu-items">
            <effective class="top-menu-item" duration="0.5s">
                <p>channels</p>
            </effective>
        </div>
        <div class="top-menu-items">
            <effective class="top-menu-item" duration="0.5s">
                <p>bots</p>
            </effective>
        </div>
        <div class="top-menu-tab-line"></div>
    </div>
</template>
<script>
export default {
    name: "TopMenuHorizantal",
    mounted() {
        this.tab()
    },
    methods: {
        tab(){
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
            topMenuItems.forEach((e)=>{
                e.addEventListener("click", function(){
                    let calcLeftofScrollable = this.offsetLeft - (scrollable.clientWidth / 2) + (this.offsetWidth / 2)
                    let calcTablineLeft = this.offsetLeft + ((this.offsetWidth - this.querySelector("p").offsetWidth) / 2) - 4;
                    let calcTablineWidth = this.querySelector("p").offsetWidth + 8;
                    tabline.style = `
                        width:${calcTablineWidth}px;
                        transform:translateX(${calcTablineLeft}px);
                    `
                    let tabto = document.querySelector(".tab-to")
                    if(tabto){
                        tabto.classList.remove("tab-to")
                    }
                    let tabripple = document.querySelector(".ripple-tab-to")
                    if(tabripple){
                       tabripple.classList.remove("ripple-tab-to");
                    }
                    this.classList.add("tab-to")
                    this.querySelector(".ripple").classList.add("ripple-tab-to")
                    setTimeout(()=>{
                        scrollable.scrollLeft = calcLeftofScrollable
                    },500)
                })
            })
        }
    },
}
</script>
<style>
    .top-menu-scrollable{
        overflow-x: scroll;
        display: flex;
        flex-direction: row;
        position: relative;
        padding-right: 10px;
        scroll-behavior: smooth;
    }
    .top-menu-scrollable::-webkit-scrollbar{
        display: none;
    }
    .top-menu-items{
        width: auto;
    }
    .top-menu-items:first-child{
        margin-left: 10px;
    }
    .top-menu-items{
         -webkit-touch-callout: none; 
         -webkit-user-select: none; 
         -khtml-user-select: none; 
         -moz-user-select: none; 
         -ms-user-select: none; 
         user-select: none;
    }
    .top-menu-item{
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
    .top-menu-tab-line{
         position: absolute;
         width: 30px;
         height:4px;
         background-color: var(--primary);
         border-top-left-radius: 3px;
         border-top-right-radius: 3px;
         transition: all .7s;
         bottom: 0px;
    }
    .tab-to{
        color: var(--primary);
    }
    .tab-to:hover{
        background-color: #eff6fe !important;
    }
    .top-menu-badge{
        margin-left: 7px;
        background-color: var(--primary);
    }
</style>