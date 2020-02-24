<template>
  <div class="container">
    <div>
      <h1 class="title">{{title}}</h1>
      <!-- item List-->
      <ul class="item-list">
        <li v-for="item in itemsComp">
          <div>
            <span>{{item.pid}}</span>
            <h3>{{ item.title}}</h3>
            <p>
              <span>{{item.price}}</span>
              {{item.paymenth_method}}
            </p>
            <div>
              {{item.description}}
            </div>
          </div>
        </li>
      </ul>
      <div class="links">
        <a class="button--green" @click="test">MORE</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  async fetch({ app }){
    let res = await app.$axios.get("/api/item")
    //console.log(res.data + "fetch");
    app.store.commit("setItem",res.data);
  },
  components: {
    Logo
  },
  computed:{
    itemsComp() { return this.$store.state.items }
  },
  data(){
    return{
      title:"DOLLY-MARKET",
      items:[],
    }
  },
  mounted(){

  },
  methods: {
    async test() {
      // Server Test
      const r = await this.$axios.$get("/api/item");
      console.log(r);
      this.$store.commit("setItem",r.data);
    }
  },
  // async asyncData({ app }) {
  //   //Server Test
  //   const res = await app.$axios.get("/api/item")

  //   return{
  //     items:res.data
  //   }
  // }
};
</script>

<style>
ul{
  list-style:none;
}
.item-list{
  overflow:hidden;
  width:1000px;
  margin:30px auto 50px auto;

}
.item-list li {
  float:left;
  width:30%;
  margin-right:5%;
  text-align:left
}
.item-list li:last-child{
 margin-right:0;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  width:1000px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container .title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom:150px
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
