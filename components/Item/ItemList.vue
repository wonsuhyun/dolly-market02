<template>
  <section class="item-list">
    <ItemCard
      v-for="item in items"
      :key="item.pid"
      :pid="item.pid"
      :is-new="item.isNew"
      :title="item.title"
      :description="item.description"
      :images="item.images"
      :price="item.price"
      :payment-method="item.paymentMethod"
      :create-date="item.createDate"
    />
  </section>
</template>

<script>
import ItemCard from "@/components/Item/ItemCard"

export default {
  components: {
    ItemCard,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.item-list {
  list-style: none;
  text-align: center;
  overflow: hidden;
  width: 1000px;
  margin: 30px auto 50px auto;
}
</style>
