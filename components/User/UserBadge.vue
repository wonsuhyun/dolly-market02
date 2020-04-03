<template>
  <section class="user-badge">
    <div class="img" :style="{backgroundImage: `url(${image.fileUrl})`}"></div>
    <div class="detail">
      <p class="name">{{ nickname }}</p>
      <p>{{ email }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: false
    },
    nickname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.user-badge {
  position: relative;
}
.user-badge .img {
  position: absolute;
  width: 60px;
  height: 60px;
  display: inline-block;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.user-badge .name {
  margin-bottom: 8px;
  font-size: 18px;
}
.user-badge .detail {
  padding-left: 80px;
  margin: 50px 0;
}
</style>