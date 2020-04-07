<template>
  <div>
    <Hero />
    <!-- Todo: container 공통화 -->
    <div class="container">
      <ItemList :items="getItems" />
      <div class="buttons moreBtn">
        <b-button
          :class="{ disabledBtn: !isActiveBtn }"
          expanded
          @click="moreItems"
        >
          Load More
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import ItemList from "@/components/Item/ItemList"
import Hero from "@/components/Layout/Hero"

export default {
  components: {
    ItemList,
    Hero,
  },
  async fetch({ app }) {
    await app.store.dispatch("item/setItems")
  },
  data() {
    return {
      title: "Dolly-Market",
      isActiveBtn: true,
      isHover: false,
      moreActive: 0,
      pageNum: 1,
    }
  },
  computed: {
    getItems() {
      return this.$store.getters["item/getItems"]
    },
  },
  methods: {
    // Todo: disabled 처리 해야 함
    async moreItems() {
      await this.$store.dispatch("item/setMoreItems", ++this.pageNum)
    },
    itemHover() {
      this.isHover === true
    },
  },
}
</script>
