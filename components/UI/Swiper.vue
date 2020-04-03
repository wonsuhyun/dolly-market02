<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide
      :key="image.pid"
      v-for="image in images"
      :style="{backgroundImage: `url(${ image.fileUrl })`}"
    ></swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  data() {
    return {
      swiperOption: {
        loop: true
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
};
</script>

<style scoped>
.swiper-slide {
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 0;
}
.swiper-container {
  width: 100%;
  height: 400px;
}
.main-img {
  display: inline-block;
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>