<template>
    <span class="badge">
        <slot></slot>
    </span>
</template>
<script>
export default {
    name:"Badge"
}
</script>
<style>
    .badge{
        color: var(--w);
        border-radius: 100px;
        font-size: 17px;
        text-align: center;
        line-height: 22px;
        padding: 1px 6px;
    }
</style>