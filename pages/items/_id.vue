<template>
  <div class="detail-wrap">
    <section class="detail">
      <div class="detail-img">
        <Swiper :images="itemData.images" />
      </div>
      <div class="detail-desc">
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
    </section>
  </div>
</template>
<script>
import ItemDetail from "@/components/Item/ItemDetail";
import Swiper from "@/components/UI/Swiper";

export default {
  components: {
    ItemDetail,
    Swiper
  },
  async asyncData(ctx) {
    // Todo: 스토어 뒤져서 있으면 그거 뿌리고 없으면 axios 호출해서 스토어에 추가해야 함
    const res = await ctx.$axios.get(`/api/items/${ctx.route.params.id}`);
    return {
      itemData: res.data
    };
  }
};
</script>
<style scoped>
.detail-wrap {
  margin-top: 100px;
}
.detail {
  width: 100%;
  overflow: hidden;
}
.detail > div {
  display: inline-block;
  width: 49%;
  text-align: left;
  vertical-align: top;
}
.detail-desc {
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
</style>