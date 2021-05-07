<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, i) in menuList" v-bind:key="i">
                  <li v-for="(sub, j) in item" v-bind:key="j">
                    <a v-bind:href="sub ? '/#/product/' + sub.id : ''">
                      <img
                        v-lazy="sub ? sub.img : '/imgs/item-box-1.png'"
                        alt=""
                      />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li
              class="menu-item"
              v-for="(title, index) in menuTitles"
              :key="`${title}-${index}`"
            >
              <a href="javascript:;">{{ title }}</a>
            </li>
          </ul>
        </div>
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/product/' + item.id"
              ><img v-lazy="item.img"
            /></a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a
          v-for="(item, index) in adsList"
          :href="'/#/product/' + item.id"
          :key="index"
        >
          <img v-lazy="item.img" alt="" />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="" />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35"
              ><img v-lazy="'/imgs/mix-alpha.jpg'" alt=""
            /></a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, i) in phoneList" :key="i">
              <div class="item" v-for="(item, j) in arr" v-bind:key="j">
                <span :class="{ 'new-pro': j % 2 === 0 }">新品</span>
                <div class="item-img">
                  <img v-lazy="item.mainImage" alt="" />
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.subtitle }}</p>
                  <p class="price" @click="addCart(item.id)">
                    {{ item.price }}元
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ServiceBar />
    <Modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="middle"
      v-bind:showModal="showModal"
      @submit="goToCart"
      @cancel="showModal = false"
      @test="test"
    >
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </Modal>
  </div>
</template>

<script>
import ServiceBar from "../components/Footer/ServiceBar";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import {
  swiperOption,
  slideList,
  menuList,
  adsList,
  menuTitles,
} from "../Constants/index";
import Modal from "../components/Modal";
import "swiper/dist/css/swiper.css";
export default {
  name: "index",
  components: {
    swiper,
    swiperSlide,
    ServiceBar,
    Modal,
  },
  data() {
    return {
      adsList,
      loading: true,
      menuList,
      menuTitles,
      phoneList: [],
      showModal: false,
      slideList,
      swiperOption,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    test() {
      console.log("parent test function");
    },
    init() {
      this.axios
        .get("/api/products", {
          params: {
            categoryId: 100012,
          },
        })
        .then((res) => {
          const dataList = res.data.list;
          this.phoneList = [dataList.slice(0, 4), dataList.slice(4, 8)];
          this.loading = false;
        });
    },
    addCart(itemId) {
      this.showModal = true;
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      background-color: #55585a7a;
      box-sizing: border-box;
      .menu-wrap {
        list-style: none;
        padding: 0;
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            display: block;
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: " ";
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 50px;
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            background-color: $colorG;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: $colorG;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                width: 100%;
                height: 195px;
              }
            }
            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                  content: " ";
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>