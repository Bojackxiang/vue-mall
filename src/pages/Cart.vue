<template>
  <div>
    <order-header />
    cart
    <order-footer />
  </div>
</template>

<script>
import OrderFooter from "../components/Footer/OrderFooter.vue";
import OrderHeader from "../components/Header/OrderHeader.vue";
export default {
  components: { OrderHeader, OrderFooter },
};
</script>

<style lang="scss" scoped>
</style>