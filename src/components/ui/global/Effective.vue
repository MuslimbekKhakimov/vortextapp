<template>
    <div class="effective" ref="effective" @click="effectRipple($event)">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"Effective",
    methods: {
        effectRipple(event){
            let effective = this.$refs.effective;
            let ripple = document.createElement('div');
            if(effective.querySelectorAll('.ripple').length > 0){
                effective.removeChild(effective.querySelector(".ripple"));
            }
            effective.appendChild(ripple);     
            var d = Math.max(effective.clientWidth, effective.clientHeight);
            ripple.style.width = ripple.style.height = d + 'px';
            ripple.style.left = event.clientX - effective.offsetLeft - d / 2 + 'px';
            ripple.style.top = event.clientY - effective.offsetTop - d / 2 + 'px'; 
            ripple.classList.add('ripple');    
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
        cursor: pointer;
        overflow: hidden;
    }
    .effective:hover{
        background-color: var(--effective);
    }
    .ripple{
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.1);
        position: absolute;
        transform: scale(0);
        opacity: 1;
        animation-name: ripple;
        animation-duration: .6s;
        animation-timing-function: ease-in;
    }
    @keyframes ripple{
        to{
            transform: scale(2.5);
            opacity: 0;
        }
    }
</style>