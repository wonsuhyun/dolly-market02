<template>
<div class="detail-wrap container">
    <div class="detail-table">
         <div class="imgZone">
            <div class="main-img" :style="{backgroundImage:'url('+itemObj.images[0].file_url+')'}">
            </div>
            <ul>
                <li></li>
            </ul>
        </div>
        <div class="info">
            <p class="title">{{itemObj.title}}</p>
            <table class="item-table">
                <tbody >
                    <tr>
                        <th>price : </th>
                        <td class="price">${{itemObj.price}}</td>
                    </tr>
                     <tr>
                        <th>status : </th>
                        <td>{{ itemObj.status }}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <div class="user">
                    <div class="user-pf" :style="{backgroundImage:'url('+itemObj.user.image.file_url+')'}"></div>
                    <div class="user-info">
                        <p class="user-name">{{ itemObj.user.nickname }}</p>
                        <p>{{ itemObj.user.email }}</p>
                    </div>
                </div>
            </div>
            <div class="btn-buy">
                <button type="button">BUY NOW</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>

export default {
    data(){
        return{

        }
    },
    methods:{

    },
    computed:{
        itemObj(){
            console.log(this.$store.getters.getItem(this.$route.params.id))
            return this.$store.getters.getItem(this.$route.params.id)
        }
    },
    mounted(){
        

    },
    created(){
        
    }
}
</script>
<style>
.detail-wrap {
    margin-top:100px
}
.detail-wrap .detail-table{
    display:table;
    width:100%;
}
.detail-wrap .detail-table > div {
    display:table-cell;
    width:50%;
    text-align:left;
    vertical-align:top;
}
.detail-wrap .detail-table .info{
    padding-left:40px;
    vertical-align:top;   
}
.detail-wrap .detail-table .info .title{
    font-size:30px;
    margin-bottom:20px;
}
.detail-wrap .detail-table .info table{
    margin-bottom:30px;
    width:100%;
}
.detail-wrap .detail-table .info table th,.detail-wrap .detail-table .info table td{
    padding:10px 0;
}
.detail-wrap .detail-table .info table th{
    font-weight:400;
}
.detail-wrap .detail-table .info table td{
    text-align:right;
}
.detail-wrap .detail-table .info table td.price{
    font-size:40px
}
.detail-wrap .detail-table .info .btn-buy{
    width:100%;
}
.detail-wrap .detail-table .info .user{
    position:relative;
}
.detail-wrap .detail-table .info .user .user-pf{
    position:absolute;
    width:60px;
    height:60px;
    display:inline-block;
    border-radius:50%;
    background-repeat:no-repeat;
    background-size:cover;   
}
.detail-wrap .detail-table .info .user .user-name{
    margin-bottom:8px;
    font-size:18px;

}
.detail-wrap .detail-table .info .user .user-info{
    padding-left:80px;
    margin:50px 0 
}
.detail-wrap .detail-table .info .btn-buy button{
    width:100%;
    border:none;
    height:50px;
    background:red;
    color:#fff;
    border-radius:10px;
    font-size:17px;
    font-weight:400;
}
.detail-wrap .detail-table .info .btn-buy button:hover{
    background:#777;
}
.detail-wrap .detail-table .info .price{
    font-size:50px;
    margin-left:30px;
    vertical-align:middle
}
.detail-wrap .detail-table .info .status{
    border:1px solid #000;
    padding:0 10px;
    margin-left:30px;
    vertical-align:middle
}
.detail-wrap .detail-table .imgZone .main-img{
    display:inline-block;
    width:100%;
    height:400px;
    background-repeat:no-repeat;
    background-size:cover;
}
.detail-wrap .detail-table .info {

}
</style>