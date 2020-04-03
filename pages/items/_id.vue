<template>
  <div class="detail-wrap">
    <section class="detail">
      <div class="detail-img">
        <!-- swiper -->
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

export default {
  components: {
    ItemDetail
  },
  async asyncData(ctx) {
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
  width: 50%;
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