<template>
  <div>
    <order-header />
    cart
    <order-footer />
  </div>
</template>

<script>
import OrderFooter from "../components/OrderFooter.vue";
import OrderHeader from "../components/OrderHeader.vue";
export default {
  components: { OrderHeader, OrderFooter },
};
</script>

<style lang="scss" scoped>
</style>