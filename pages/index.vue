<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">dolly-market</h1>
      <h2 class="subtitle"></h2>
      <div class="links">
        <a class="button--green" @click="test">Test</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  methods: {
    async test() {
      // Server Test
      const r = await this.$axios.get("/api");
      console.log(r.data);
    }
  },
  async asyncData({ $axios }) {
    // Server Test
    await $axios.get("/api").then(res => {
      console.log(res.data);
    });
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
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
</style>
