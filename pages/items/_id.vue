<template>
  <div class="detail-wrap container">
    <div class="details">
      <div class="item-img">
        <!-- <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide :key="image.pid" v-for="image in itemData.images" :style="{backgroundImage: `url(${ image.fileUrl })`}"></swiper-slide>
        </swiper>-->
      </div>
      <div class="item-detail">
        <ItemDetail
          :title="itemData.title"
          :price="itemData.price"
          :status="itemData.status"
          :user="itemData.user"
        />
        <div class="btn-buy">
          <button type="button">BUY NOW</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'

import ItemDetail from "@/components/Item/ItemDetail";

export default {
  // data(){
  //     return {
  //         swiperOption:{
  //             loop:true
  //         }
  //     }
  // },
  components: {
    // Swiper,
    // SwiperSlide
    ItemDetail
  },
  //   directives: {
  //     swiper: directive
  // },
  async asyncData(ctx) {
    const res = await ctx.$axios.get(`/api/items/${ctx.route.params.id}`);
    return {
      itemData: res.data
    };
  }
};
</script>
<style scoped>
/* .swiper-slide {
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 0;
}
.detail-wrap .swiper-container {
  width: 100%;
  height: 400px;
} */
.detail-wrap {
  margin-top: 100px;
}
.detail-wrap .details {
  width: 100%;
  overflow: hidden;
}
.detail-wrap .details > div {
  display: inline-block;
  width: 50%;
  text-align: left;
  vertical-align: top;
}
.detail-wrap .details .item-detail {
  padding-left: 40px;
  vertical-align: top;
}
.btn-buy {
  width: 100%;
}
.btn-buy button {
  width: 100%;
  border: none;
  height: 50px;
  background: red;
  color: #fff;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 400;
}
.btn-buy button:hover {
  background: #777;
}
.detail-wrap .detail-table .item-img .main-img {
  display: inline-block;
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>