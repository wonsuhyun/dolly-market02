<template>
  <div class="container">
    <section class="main-title">
      <h1>{{ title }}</h1>
    </section>
    <ItemList :items="getItems" />
    <div class="links">
      <a
        href="javascript:void(0)"
        class="moreBtn"
        :class="{ disabledBtn: !isActiveBtn }"
        @click="moreItems"
      >MORE</a>
    </div>
  </div>
</template>

<script>
import ItemList from "@/components/Item/ItemList"

export default {
  components: {
    ItemList,
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
      await this.$store.dispatch("item/setItems", ++this.pageNum)
    },
    itemHover() {
      this.isHover === true
    },
  },
}
</script>

<style>
.main-title h1 {
  font-family: "Pacifico";
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
  margin: 100px 0;
  color: #00ffc0;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.moreBtn {
  background-color: #fff;
  width: 100%;
  display: inline-block;
  padding: 10px 0;
  border-radius: 10px;
  border: 1px solid #333;
}
.moreBtn:hover {
  background-color: #333;
  color: #fff;
}
.moreBtn.disabledBtn {
  background-color: #f7f7f7;
}
.moreBtn.disabledBtn:hover {
  background-color: #f7f7f7;
  color: #333;
}
</style>
