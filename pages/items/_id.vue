<template>
  <div class="detail-wrap">
    <section class="detail">
      <div class="detail-img">
        <Swiper :images="item.images" />
      </div>
      <div class="detail-desc">
        <ItemDetail
          :title="item.title"
          :price="item.price"
          :status="item.status"
          :user="item.user"
        />
        <div class="btn-buy">
          <button type="button">
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ItemDetail from "@/components/Item/ItemDetail"
import Swiper from "@/components/UI/Swiper"

export default {
  components: {
    ItemDetail,
    Swiper,
  },
  async asyncData({ params, store }) {
    const itemId = params.id

    await store.dispatch("item/setItem", itemId)
    const item = store.getters["item/getItem"]  
  
    return { item }
  },
}
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
