<template>
    <div class="custom-switch" :class="{custom_switch_activate:action}"></div>
</template>
<script>
export default {
    name:"Switch",
    props:{
        action:{
            type:Boolean,
            default:false
        }
    }
}
</script>
<style>
    .custom-switch{
        display: inline-block;
        position: relative;
        width: 35px;
        height: 14px;
        background-color: var(--secondary-dark);
        border-radius: 10px;
        transition: all .3s;
    }
    .custom-switch::before{
        box-sizing: border-box;
        content: "";
        display: inline-block;
        position: absolute;
        width: 21px;
        height: 21px;
        transform: translateX(0%);
        border: 2px solid var(--secondary-dark);
        background-color: var(--w);
        border-radius: 50%;
        top: -3.5px;
        transition: all .3s;
    }
    .custom_switch_activate::before{
        transform: translateX(69%);
        border: 2px solid var(--primary);
    }
    .custom_switch_activate{
        background-color: var(--primary);
    }
</style>