<template>
  <div class="header">
    <Topbar :username="'alex'" :cartCount="12" :login="login" :logout="logout"/>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <MenuItemDropdownVue :name="'小米手机'" :code="100012" />
          <MenuItemDropdownVue :name="'小米手机'" :code="100012" />
          <MenuItemDropdownVue :name="'小米手机'" :code="100012" />
          
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItemDropdownVue from "./MenuItemDropdown.vue";
import Topbar from "./TopBar";

export default {
  name: "nav-header",
  components: {
    Topbar,
    MenuItemDropdownVue,
  },
  data() {
    return {
      username: "Alex",
      phoneList: [],
    };
  },
  mounted() {
  },
  methods: {
    goToCart() {
      this.$router.push("/cart");
    },
    login() {
      this.$router.push("/login");
    },
    logout() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/base.scss";
@import "../../assets/scss/mixin.scss";
@import "../../assets/scss/config.scss";
.header {
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex();
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
      }
    }
    .header-search {
      width: 319px;
      .wrapper {
        height: 50px;
        border: 1px solid #e0e0e0;
        display: flex;
        align-items: center;
        input {
          border: none;
          box-sizing: border-box;
          border-right: 1px solid #e0e0e0;
          width: 264px;
          height: 50px;
          padding-left: 14px;
        }
        a {
          @include bgImg(18px, 18px, "/imgs/icon-search.png");
          margin-left: 17px;
        }
      }
    }
  }
}
</style>