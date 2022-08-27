<template>
  <WholePage></WholePage>
</template>

<script>
import WholePage from "@/components/views/WholePage.vue"
export default {
  name: 'App',
  components: {
    WholePage
  },
  created() {
    document.title = "messenger"
  },
}
</script>

<style>
@import "@/assets/css/index.css";
/*
eng kata komponenga berilishi kerak bo'lgan stil 
.wholepage * {
  transition:  none !important;
  animation: none !important;
  scroll-behavior:inherit;
} */
</style>
