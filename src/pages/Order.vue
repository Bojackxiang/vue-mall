<template>
  <div>
    <router-view />
    <Footer />
  </div>
</template>



<script>
import OrderHeader from "../components/Header/OrderHeader.vue";
import Footer from '../components/Footer/NavFooter'

export default {
  components: {
    OrderHeader,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>