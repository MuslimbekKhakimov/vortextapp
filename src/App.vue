<template>
  <WholePage
    :class="{animations_off:!animations}"
  ></WholePage>
</template>

<script>
import { mapState } from "vuex";
import WholePage from "@/components/views/WholePage.vue"
export default {
  name: 'App',
  components: {
    WholePage
  },
  computed:{
    ...mapState({animations: state=>state.leftSide.items.StorageItems.animations})
  }
}
</script>

<style>
@import "@/assets/css/index.css";
.animations_off * {
  transition:  none !important;
  animation: none !important;
  scroll-behavior:inherit;
} 
</style>
