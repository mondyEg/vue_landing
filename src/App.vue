<template>
  <div id="app">
    <imooc-header></imooc-header>
    <router-view />
    <imooc-footer></imooc-footer>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "app",
  components: {
    "imooc-header": Header,
    "imooc-footer": Footer,
  },
};
</script>

<style lang="scss">
@import "assets/layui/css/layui.css";
@import "assets/css/global.css";
@import "assets/layui/css/modules/layer/default/layer.css";
</style>
