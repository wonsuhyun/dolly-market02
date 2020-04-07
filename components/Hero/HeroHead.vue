<template>
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link to="/" class="navbar-item">
            {{ headerTitle }}
          </nuxt-link>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span />
            <span />
            <span />
          </span>
        </div>
        <HeroMenu />
      </div>
    </nav>
  </div>
</template>
<script>
import HeroMenu from "@/components/Hero/HeroMenu"

export default {
  components: {
    HeroMenu,
  },
  data() {
    return {
      headerTitle: "Dolly Market",
    }
  },
  methods: {
    enterKey: function (e) {
      if (e.keyCode === 13) {
        console.log("keyup")
        // $("#serchBtn").trigger("click")
      }
    },
    btnClickEvent: function (e) {
      console.log("triggered")
    },
  },
}
</script>
<style scoped>
.navbar-item {
  font-family: "Pacifico";
  font-weight: 600;
  letter-spacing: 2px;
}
</style>
