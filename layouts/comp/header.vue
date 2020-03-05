<template>
    <div class="header-wrap">
        <span class="title">
            <nuxt-link to="/" >
            {{ headerTitle }}
            </nuxt-link>
        </span>
        
        <div class="search">
            <input type="text" id="searchArea" class="search-area" @keyup="enterKey"/><button type="button" id="serchBtn" @click="btnClickEvent">Search</button>
            <div class="sign">
                <span class="sign-in"> 
                    <nuxt-link to="/login">Sign in</nuxt-link>
                </span>
                <span class="sign-up">  
                    <nuxt-link to="/">Sign up</nuxt-link>
                </span>
            </div>

            
        </div>
        
        <!-- <div v-if="$auth.loggedIn">
            {{$auth.user.email}}
            <v-btn text>Logout</v-btn>
        </div>
        <div v-else>
            <v-btn text to="/login">Login</v-btn>
            <v-btn text to="/signup">Signup</v-btn>
        </div> -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            headerTitle:"Dolly Market"
        }
    },
    methods:{
        enterKey:function(e){
            if(e.keyCode==13){
                console.log("keyup")
                $("#serchBtn").trigger("click")
            }
        },
        btnClickEvent:function(e){
            console.log("triggered")
        }
    }
}
</script>
<style>

.header-wrap {
    width:1000px;
    margin:0 auto;
    padding:30px 0;
    overflow:hidden;
}
.header-wrap > span{
    float:left
}
.header-wrap > .search{
    float:right
}
.header-wrap > .search .sign {
    display:inline-block;
    margin-left:10px;
    vertical-align:middle
}
.header-wrap > .search .sign > span{
    display:inline-block;
    border:1px solid #333;
    border-radius:5px;
    padding:5px 8px;
}
.header-wrap > .search input, .header-wrap > .search button{
    height:40px;
    padding: 0 20px
}
.header-wrap > .search button{
    border:none;
    background:#5e5e5e;
    color:#fff;
}
.header-wrap > .search input{
    width:300px;
    border:1px solid #d2d2d2
}
.header-wrap span.title{
    font-weight:700;
    font-size:20px;
    font-family:'Roboto';
}
</style>