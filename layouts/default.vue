<template>
  <div>
    <Header />
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>
<script>
import Header from "@/layouts/comp/header";
export default {
  components:{
    Header
  }
}
</script>
<style>
a{
  text-decoration:none;
  color:#333
}
input{
  padding:3px 5px;
}

html {
  font-family: 'Noto Sans KR';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body,ul,p,li,div,h1,h2,h3,span,a,ol {
  margin:0;
  padding:0;
  box-sizing:border-box
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  width:400px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  margin: 100px auto;
  width: 1000px;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
