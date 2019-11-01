<template>
  <!--swiper-->
  <div class="bodySwiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div href="#" class="swiper-slide" v-for="(s,index) in sliderImgs" :key="index">
          <img :src="s.sliderImg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "IndexSlider",
  data() {
    return {
      sliderImgs: [
        { sliderImg: require("@/assets/images/swiper1.png") },
        { sliderImg: require("@/assets/images/swiper1.png") }
      ]
    };
  },
  mounted() {
    let mySwiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: true,
      observer: true,
      slidesPerView: "auto",
      loopedSlides: 8,
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      autoplay: {
        disableOnInteraction: false // 手动滑动后继续自动播放
      }
    });
  }
};
</script>

<style scoped>
@import "~@/assets/css/swiper.css";
.bodySwiper {
  width: 100%;
}
.swiper-container {
  width: 100%;
  /*height:700px;*/
  margin: 0 auto;
  overflow: hidden;
}
.swiper-wrapper .swiper-slide {
  width: 100%;
  /*height:700px;*/
}
.swiper-wrapper .swiper-slide img {
  width: 100%;
  /*height:700px;*/
}
</style>
