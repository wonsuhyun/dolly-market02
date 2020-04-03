<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide
      :key="image.pid"
      v-for="image in images"
      :style="{backgroundImage: `url(${ image.fileUrl })`}"
    ></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  }
};
</script>

<style scoped>
/* Todo: 나중에 컴포넌트 재활용 대비해서 아래 부분 동적 CSS로 만들어야 함 */
.swiper-slide {
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 0;
}
</style>