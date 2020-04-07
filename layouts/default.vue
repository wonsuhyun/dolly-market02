<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
<style>
a {
  text-decoration: none;
  color: #333;
}
input {
  padding: 3px 5px;
}

html {
  font-family: "Noto Sans KR";
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body,
ul,
p,
li,
div,
h1,
h2,
h3,
span,
a,
ol {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
