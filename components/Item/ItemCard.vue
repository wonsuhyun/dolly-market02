<template>
  <nuxt-link :to="`/items/${pid}`">
    <article class="item-card">
      <span class="new" v-if="isNew">NEW</span>
      <div>
        <h3>{{ title }}</h3>
        <div class="img" :style="{ backgroundImage: `url(${images[0].fileUrl})` }"></div>
        <p class="cash">
          <span>$ {{ price }}</span>
          <span class="type">{{ paymentMethod }}</span>
        </p>
        <div>{{ description}}</div>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    pid: {
      type: String,
      required: true
    },
    isNew: {
      type: Boolean,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: false
    },
    price: {
      type: Number,
      required: true
    },
    paymentMethod: {
      type: String,
      required: true
    },
    createDate: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.item-card {
  float: left;
  width: 30%;
  margin: 0 1% 0 1%;
  text-align: left;
  padding: 20px 0 10px 0;
  position: relative;
  height: 400px;
  vertical-align: top;
}
.item-card span.new {
  position: absolute;
  top: 22px;
  right: 0;
  background: linear-gradient(#e66465, #9198e5);
  color: #fff;
  padding: 5px 10px;
  font-size: 12px;
}
.item-card .img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  display: inline-block;
  width: 100%;
  height: 200px;
  margin: 10px 0;
}
.item-card .cash {
  text-align: center;
  margin-bottom: 10px;
}
.item-card .cash .type {
  font-size: 12px;
  border: 1px solid #333;
  padding: 0 10px;
  margin-left: 15px;
}
</style>