<template>
  <section class="user-badge">
    <div class="user-pf" :style="{backgroundImage: `url(${user.image.fileUrl})`}"></div>
    <div class="user-info">
      <p class="user-name">{{ user.nickname }}</p>
      <p>{{ user.email }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.user-badge {
  position: relative;
}
.user-badge .user-pf {
  position: absolute;
  width: 60px;
  height: 60px;
  display: inline-block;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.user-badge .user-name {
  margin-bottom: 8px;
  font-size: 18px;
}
.user-badge .user-info {
  padding-left: 80px;
  margin: 50px 0;
}
</style>