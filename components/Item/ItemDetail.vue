<template>
  <section class="item-detail">
    <p class="title">{{ title }}</p>
    <table class="item-table">
      <tbody>
        <tr>
          <th>price :</th>
          <td class="price">${{ price }}</td>
        </tr>
        <tr>
          <th>status :</th>
          <td>{{ status }}</td>
        </tr>
      </tbody>
    </table>
    <UserBadge :image="user.image" :nickname="user.nickname" :email="user.email" />
  </section>
</template>

<script>
import UserBadge from "@/components/User/UserBadge";
export default {
  components: {
    UserBadge,
  },
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 30px;
  margin-bottom: 20px;
}
.item-table {
  margin-bottom: 30px;
  width: 100%;
}
.item-table th,
.item-table td {
  padding: 10px 0;
}
.item-table th {
  font-weight: 400;
}
.item-table td {
  text-align: right;
}
.item-table td.price {
  font-size: 40px;
}
.price {
  font-size: 50px;
  margin-left: 30px;
  vertical-align: middle;
}
.status {
  border: 1px solid #000;
  padding: 0 10px;
  margin-left: 30px;
  vertical-align: middle;
}
</style>