<template>
  <section class="item-detail section">
    <div class="content is-medium">
      <p class="title">{{ title }}</p>
      <p class="sub-title">$ {{ price }}</p>
    </div>
    <div class="box">
      <UserBadge :image="user.image" :nickname="user.nickname" :email="user.email" />
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
  },
}
</script>

<style scoped>
</style>