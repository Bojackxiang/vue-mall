<template>
  <div>
    <nav-header />
    <router-view />
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader.vue";
import NavFooter from "../components/NavFooter.vue";
export default {
  components: { NavHeader, NavFooter },
  name: "home",
};
</script>

<style lang="scss" scoped>
  
</style>