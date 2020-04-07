<template>
  <section class="hero is-primary is-medium">
    <HeroHead />
    <HeroBody v-if="isRootURL" />
  </section>
</template>

<script>
import HeroHead from "@/components/Hero/HeroHead"
import HeroBody from "@/components/Hero/HeroBody"

export default {
  components: {
    HeroHead,
    HeroBody,
  },
  data() {
    return {
      isRootURL: false,
    }
  },
  watch: {
    "$route.path"() {
      this.isRootURL = this.$route.path === "/"
    },
  },
}
</script>
