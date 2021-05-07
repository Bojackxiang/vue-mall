<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

  mounted() {
    this.getUser();
    this.getCartCount();
  },

  methods: {
    getUser() {
      this.axios.get("/api/user").then((res) => {
        const { status, data } = res;
        // 如果 在 interceptor 中处理的话，就不需要 在这边做 panduan
        console.log("user", { status, data });
      });
    },
    getCartCount() {
      this.axios("/api/carts/products/sum").then((res) => {
        const { status, data } = res;
        console.log("cart", { status, data });
      });
    },
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0px !important;
  padding: 0px !important;
}
</style>
