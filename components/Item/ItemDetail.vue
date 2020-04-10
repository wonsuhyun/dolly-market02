<template>
  <section class="item-detail section">
    <p class="title">
      {{ title }}
    </p>
    <p class="sub-title">
      {{ description }}
    </p>
    <table class="table">
      <tbody>
        <tr>
          <th>price</th>
          <td>${{ price }}</td>
        </tr>
        <tr>
          <th>status</th>
          <td>{{ status }}</td>
        </tr>
      </tbody>
    </table>
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
    status: {
      type: String,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>
