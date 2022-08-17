<template>
    <div class="effective" @click="effectPulse">
        <slot></slot>
        <div class="effective-pulse" ref="effect_pulse"></div>
    </div>
</template>
<script>
export default {
    name:"Effective",
    methods: {
        effectPulse(){
            let element = this.$refs.effect_pulse;
            let layery = event.layerY;
            let layerx = event.layerX;
            element.style = `transform:scale(2);top:${layery-10}px; left:${layerx-10}px;`
            setTimeout(() => {
                element.style = "opacity:0; transform:scale(0);"    
            }, 600);
        }
    }
}
</script>
<style>
    .effective{
        position: relative;
        transition-property: background-color;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        overflow: hidden;
    }

    .effective:hover{
        background-color: var(--effective);
    }
    .effective-pulse{
        transition: all 0.5s;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgb(0, 0, 0, 0.07);
        transform: scale(0);
        border-radius: 100px;
    }
</style>