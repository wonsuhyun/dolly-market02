<template>
  <div class="container">
    <div class="columns">
      <div class="column is-two-fifths">
        <Carousel :images="item.images" />
      </div>
      <div class="column">
        <ItemDetail
          :title="item.title"
          :description="item.description"
          :price="item.price"
          :status="item.status"
          :user="item.user"
        />
        <div class="buttons">
          <b-button type="is-success" expanded>
            Buy Now
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ItemDetail from "@/components/Item/ItemDetail"
import Carousel from "@/components/UI/Carousel"

export default {
  components: {
    ItemDetail,
    Carousel,
  },
  async asyncData({ params, store }) {
    const itemId = params.id

    await store.dispatch("item/setItem", itemId)
    const item = store.getters["item/getItem"]

    return { item }
  },
}
</script>
