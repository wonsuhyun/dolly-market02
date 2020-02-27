<template>
  <div class="container">
    <div>
      <h1 class="main-title">{{title}}</h1>
      <!-- item List-->
      <ul class="item-list" >
        <li v-for="item in itemsComp" @mouseover="itemHover" >
          <nuxt-link :to="'/item/'+item.pid" >
          <span class="new" v-if="item.isNew">NEW</span>
          <div>
            <h3>{{ item.title}}</h3>
            <div class="imgDiv" :style="{backgroundImage:'url('+item.images[0].file_url+')'}"></div>
            <p class="cash">
              <span>$ {{item.price}} </span>
              <span class="type">{{item.paymenth_method}}</span>
            </p>
            <div>
              {{item.description}}
            </div>
            <div class="create-date">{{ item.create }}</div>
          </div>
          </nuxt-link>
        </li>
      </ul>
      <div class="links">
        <a class="button--green" @click="test" :disabled="isActiveBtn" >MORE</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  // async fetch({ app }){
  //   let res = await app.$axios.get("/api/item")
  //   console.log(res.data[0]);
  //   app.store.dispatch("testAction",res.data);
  // },
  components: {
    Logo
  },
  computed:{
    itemsComp() { return this.$store.state.items }
  },
  data(){
    return{
      title:"Dolly-Market",
      items:[],
      isActiveBtn:false,
      isHover:false
    }
  },
  mounted(){
    if(this.$store.state.items > 3){
      this.isActiveBtn = true
    }else{
      this.isActiveBtn = false
    }
  },

  methods: {
    async test() {
      // Server Test
      // const r = await this.$axios.$get("/api/item");
      // console.log(r);
      // this.$store.commit("setItem",r.data);

    },
    itemHover(){
      debugger;
      this.isHover==true
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
  text-align:left;
  padding:20px 0 10px 0;
  position:relative;
}
.item-list li.on{
  border:1px solid red
}
.item-list li .create-date{
  font-size:10px;
  color:#d9d9d9;
  text-align:center;
  margin-top:5px;
}
.item-list li span.new{
  position:absolute;
  top:22px;
  right:0;
  background:linear-gradient(#e66465, #9198e5);;
  color:#fff;
  padding:5px 10px;
  font-size:12px;
}
.item-list li .imgDiv{
  background-repeat:no-repeat;
  background-size:cover;
  background-position:0 0;
  display:inline-block;
  width:100%;
  height:200px;
  margin:10px 0
}
.item-list li .cash{
  text-align:center;
  margin-bottom:10px
}
.item-list li .cash .type{
  font-size:12px;
  border:1px solid #333;
  padding:0 10px;
  margin-left:15px;
}
.item-list li:last-child{
 margin-right:0;
}
.container {
  margin: 100px auto;
  width:1000px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container .main-title {
  font-family: "Pacifico";
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
  margin:100px 0;
  color:#00ffc0;
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
