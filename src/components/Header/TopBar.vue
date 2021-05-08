<template>
  <div class="nav-topbar">
    <div class="container">
      <div class="topbar-menu">
        <a href="javascript:;">小米商城</a>
        <a href="javascript:;">MUI</a>
        <a href="javascript:;">云服务</a>
        <a href="javascript:;">协议规则</a>
      </div>
      <div class="topbar-user">
        <a href="javascript:;" v-if="username" @click.prevent="OnUsernameClicked">{{ username }}</a>
        <a href="javascript:;" v-if="!Boolean(username)" @click="login">登录</a>
        <a href="javascript:;" v-if="Boolean(username)" @click="logout">退出</a>
        <a href="/#/order/list" v-if="Boolean(username)">我的订单</a>
        <a class="my-cart"
          ><span class="icon-cart"> </span>购物车({{ cartCount }})</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["username", "cartCount", 'login', 'logout'],

  mounted() {
    this.check();
  },
  methods: {
    check() {
      console.log(this.username, this.cartCount);
    },
    OnUsernameClicked(){
      this.$store.dispatch('toggleDisplayUsername')
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/base.scss";
@import "../../assets/scss/mixin.scss";
@import "../../assets/scss/config.scss";
.nav-topbar {
  height: 39px;
  line-height: 39px;
  background-color: #333333;
  color: #b0b0b0;
  .container {
    @include flex();
    a {
      display: inline-block;
      color: #b0b0b0;
      margin-right: 17px;
    }
    .my-cart {
      width: 110px;
      background-color: #ff6600;
      text-align: center;
      color: #ffffff;
      margin-right: 0;
      .icon-cart {
        @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
        margin-right: 4px;
      }
    }
  }
}
</style>