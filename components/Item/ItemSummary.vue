<template>
  <section class="item-detail section">
    <div class="content is-medium">
      <p class="title">
        {{ title }}
      </p>
      <p class="subtitle">
        {{ description }}
      </p>
      <p class="subtitle is-3">$ {{ price }}</p>
      <div class="tags are-medium">
        <b-tag v-for="tag in tags" :key="tag.pid" type="is-primary">
          {{ tag.name }}
        </b-tag>
      </div>
    </div>
    <div class="box">
      <UserBadge
        :image="user.image"
        :nickname="user.nickname"
        :email="user.email"
      />
    </div>
  </section>
</template>

<script>
import UserBadge from "@/components/User/UserBadge"

export default {
  components: {
    UserBadge,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
    tags: {
      type: Array,
      required: false,
    },
  },
}
</script>
