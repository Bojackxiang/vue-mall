<template>
  <div class="item-menu">
    <span>{{ name }}</span>
    <div class="children">
      <ul>
        <li class="product" v-for="(item, index) in itemList" :key="index">
          <a v-bind:href="'/#/product/' + item.id" target="_blank">
            <div class="pro-img">
              <img  v-lazy="item.mainImage" :alt="item.subtitle" />
            </div>
            <div class="pro-name">{{ item.name }}</div>
            <div class="pro-price">{{ item.price | currency }}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["code", "name"],
  filters:{
    currency(value){
      if(!value) return '0.00 元';
      return `${value} 元`
    }
  },
  mounted(){
      this.getProductList()
  },
  data(){
      return {
          itemList: []
      }
  }, 
  methods: {
    getProductList() {
      this.axios
        .get("/api/products", {
          params: {
            categoryId: this.code,
          },
        })
        .then((res) => {
          const data = res.data.list.slice(0, 6);
          console.log(data);
          this.itemList = data;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/base.scss";
@import "../../assets/scss/mixin.scss";
@import "../../assets/scss/config.scss";
.item-menu {
  display: inline-block;
  color: #333333;
  font-weight: bold;
  font-size: 16px;
  line-height: 112px;
  margin-right: 20px;
  span {
    cursor: pointer;
  }
  &:hover {
    color: $colorA;
    .children {
      height: 220px;
      opacity: 1;
    }
  }
  .children {
    position: absolute;
    top: 112px;
    left: 0;
    width: 1226px;
    height: 0;
    opacity: 0;
    overflow: hidden;
    border-top: 1px solid #e5e5e5;
    box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
    z-index: 10;
    transition: all 0.5s;
    background-color: #ffffff;
    .product {
      position: relative;
      float: left;
      width: 16.6%;
      height: 220px;
      font-size: 12px;
      line-height: 12px;
      text-align: center;
      a {
        display: inline-block;
      }
      img {
        width: auto;
        height: 111px;
        margin-top: 26px;
      }
      .pro-img {
        height: 137px;
      }
      .pro-name {
        font-weight: bold;
        margin-top: 19px;
        margin-bottom: 8px;
        color: $colorB;
      }
      .pro-price {
        color: $colorA;
      }
      &:before {
        content: " ";
        position: absolute;
        top: 28px;
        right: 0;
        border-left: 1px solid $colorF;
        height: 100px;
        width: 1px;
      }
      &:last-child:before {
        display: none;
      }
    }
  }
}
</style>