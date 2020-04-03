<template>
  <div class="container">
    <section class="main-title">
      <h1>{{title}}</h1>
    </section>
    <ItemList :items="getItems" />
    <div class="links">
      <a
        href="javascript:void(0)"
        class="moreBtn"
        @click="moreItems"
        v-bind:class="{ 'disabledBtn' : isActiveBtn }"
      >MORE</a>
    </div>
  </div>
</template>

<script>
import ItemList from "@/components/Item/ItemList";

export default {
  components: {
    ItemList
  },
  data() {
    return {
      title: "Dolly-Market",
      isActiveBtn: false,
      isHover: false,
      moreActive: 0
    };
  },
  methods: {
    // Todo: pageNum, disabled 처리와 같은 거 해야 함
    async moreItems() {
      this.$store.dispatch('setItems', 2)
      // if (this.isActiveBtn == false) {
        

      //   // if (res.length > 0) {
      //   //   this.moreActive += 1;
      //   //   res.map(item => {
      //   //     this.items.push(item);
      //   //   });
      //   // } else {
      //   //   this.isActiveBtn = true;
      //   // }
      // }
    },
    itemHover() {
      this.isHover == true;
    }
  },
  computed: {
    getItems() {
      return this.$store.getters.getItems
    }
  }
};
</script>

<style scoped>
.container {
  margin: 100px auto;
  width: 1000px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container .main-title h1 {
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
