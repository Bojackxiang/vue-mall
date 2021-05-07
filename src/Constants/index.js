// swiper 的配置
export const swiperOption = {
  autoplay: true,
  loop: true,
  effect: "cube",
  cubeEffect: {
    shadowOffset: 100,
    shadowScale: 0.6
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
};

export const slideList = [
  {
    id: "42",
    img: "/imgs/slider/slide-1.jpg"
  },
  {
    id: "45",
    img: "/imgs/slider/slide-2.jpg"
  },
  {
    id: "46",
    img: "/imgs/slider/slide-3.jpg"
  },
  {
    id: "",
    img: "/imgs/slider/slide-4.jpg"
  },
  {
    id: "",
    img: "/imgs/slider/slide-1.jpg"
  }
];

export const menuList = [
  [
    {
      id: 30,
      img: "/imgs/item-box-1.png",
      name: "小米CC9"
    },
    {
      id: 31,
      img: "/imgs/item-box-2.png",
      name: "小米8青春版"
    },
    {
      id: 32,
      img: "/imgs/item-box-3.jpg",
      name: "Redmi K20 Pro"
    },
    {
      id: 33,
      img: "/imgs/item-box-4.jpg",
      name: "移动4G专区"
    }
  ],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

export const adsList = [
  {
    id: 33,
    img: "/imgs/ads/ads-1.png"
  },
  {
    id: 48,
    img: "/imgs/ads/ads-2.jpg"
  },
  {
    id: 45,
    img: "/imgs/ads/ads-3.png"
  },
  {
    id: 47,
    img: "/imgs/ads/ads-4.jpg"
  }
];

export const menuTitles = [
  "电视 盒子",
  "笔记本 平板",
  "家电 插线板",
  "电视 盒子",
  "笔记本 平板",
  "家电 插线板",
  "生活 箱包"
];


