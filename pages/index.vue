<template>
  <div class="container">
    <div>
      <h1 class="main-title">{{ title }}</h1>
      <!-- item List-->
      <ul class="item-list" >
        <ItemCard v-for="item in items"
                  :key="item.pid" 
                  :pid="item.pid"
                  :isNew="item.isNew"
                  :title="item.title"
                  :description="item.description"
                  :images="item.images"
                  :price="item.price"
                  :paymentMethod="item.paymentMethod"
                  :createDate="item.createDate" />
          <!-- <nuxt-link :to="`/items/${item.pid}`" >
          <span class="new" v-if="item.isNew">NEW</span>
          <div>
            <h3>{{ item.title}}</h3>
            <div class="imgDiv" :style="{backgroundImage: `url(${item.images[0].fileUrl})`}"></div>
            <p class="cash">
              <span>$ {{item.price}} </span>
              <span class="type">{{item.paymentMethod}}</span>
            </p>
            <div>
              {{item.description}}
            </div>
            <div class="create-date">{{ item.create }}</div>
          </div>
          </nuxt-link> -->

      </ul>
      <div class="links">
        <a href="javascript:void(0)" class="moreBtn" @click="moreConts" v-bind:class="{ 'disabledBtn' : isActiveBtn }">MORE</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue"
import ItemCard from '@/components/Items/ItemCard'

export default {
  // async fetch({ app }){
  //   let res = await app.$axios.get("/api/item")
  //   console.log(res.data[0]);
  //   app.store.dispatch("testAction",res.data);
  // },
  components: {
    Logo,
    ItemCard
  },
  data(){
    return{
      title:"Dolly-Market",
      items:[],
      isActiveBtn:false,
      isHover:false,
      moreActive:0
    }
  },
  methods: {
    async moreConts() {
      if(this.isActiveBtn == false){
        const res = await this.$axios.$get("/api/items?pageNum="+(this.moreActive+1));
        
        if(res.length > 0 ){
          this.moreActive+=1
          res.map((item)=>{
            this.items.push(item)
          })
        }else{
          this.isActiveBtn=true
        }
      }
    },
    itemHover(){
      this.isHover==true
    }
  },
  async asyncData({ app }) {
    const res = await app.$axios.get("/api/items?pageNum=1")
    // console.log(res.data)
    return {
      items:res.data,
      moreActive:1
    }
  }
};
</script>

<style>

ul{
  list-style:none;
  text-align:center
}
.item-list{
  overflow:hidden;
  width:1000px;
  margin:30px auto 50px auto;

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
.button--green[disabled]{
  
}
.moreBtn{
  background-color:#fff ;
  width:100%;
  display:inline-block;
  padding:10px 0;
  border-radius:10px;
  border:1px solid #333;
}
.moreBtn:hover{
  background-color:#333;
  color:#fff;
}
.moreBtn.disabledBtn{
  background-color:#f7f7f7 ;
}
.moreBtn.disabledBtn:hover{
  background-color:#f7f7f7 ;
  color:#333;
}
</style>
