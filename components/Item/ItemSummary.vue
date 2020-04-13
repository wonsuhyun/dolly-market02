<template>
  <section class="item-detail section">
    <div class="content is-medium">
      <p class="title">
        {{ title }}
      </p>
      <div class="tags are-medium">
        <span v-for="tag in tags" :key="tag.pid" class="tag">{{
          tag.name
        }}</span>
      </div>
      <p class="sub-title">$ {{ price }}</p>
      <b-field>
        <b-numberinput controls-rounded type="is-light" class="is-fullwidth" />
      </b-field>
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

<style scoped></style>
