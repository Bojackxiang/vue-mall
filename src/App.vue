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
        console.log("user", { status, data });
        // 到达这边，说明已经成功获取用户信息，否则应该被拦截到
        // TODO: 解决拦截的问题

        this.$store.dispatch("saveUserName", data.username);
      });
    },
    getCartCount() {
      this.axios("/api/carts/products/sum").then((res) => {
        const { status, data } = res;
        console.log("cart", { status, data });
        this.$store.dispatch("saveCartNumber", data);
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
