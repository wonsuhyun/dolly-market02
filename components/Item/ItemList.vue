<template>
  <!-- Todo: 3의 배수 -->
  <div class="columns">
    <div v-for="item in items" :key="item.pid" class="column is-one-third">
      <ItemCard
        :pid="item.pid"
        :is-new="item.isNew"
        :title="item.title"
        :description="item.description"
        :images="item.images"
        :price="item.price"
        :payment-method="item.paymentMethod"
        :create-date="item.createDate"
      />
    </div>
  </div>
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
