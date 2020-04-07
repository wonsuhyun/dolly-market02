<template>
  <nuxt-link :to="`/items/${pid}`">
    <article class="item-card">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :style="{ backgroundImage: `url(${images[0].fileUrl})` }">
          </figure>
        </div>
        <div class="card-content">
          <!-- <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div> -->

          <div class="content">
            <h3>{{ title }}</h3>
            $ {{ price }}
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
      <!-- <article class="item-card">
      <span v-if="isNew" class="new">NEW</span>
      <div>
        <h3>{{ title }}</h3>
        <div
          class="img"
          :style="{ backgroundImage: `url(${images[0].fileUrl})` }"
        />
        <p class="cash">
          <span>$ {{ price }}</span>
          <span class="type">{{ paymentMethod }}</span>
        </p>
        <div>{{ description }}</div>
      </div>
    </article> -->
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    pid: {
      type: String,
      required: true,
    },
    isNew: {
      type: Boolean,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    createDate: {
      type: String,
      required: true,
    },
  },
}
</script>
