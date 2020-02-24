<template>
    <div class="header-wrap">
        <span class="title">{{ headerTitle }}</span>
        <div class="search">
            <input type="text" id="searchArea" class="search-area"/><button type="button">Search</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            headerTitle:"Dolly-Market"
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
.header-wrap > .search input, .header-wrap > .search button{
    height:40px
}
.header-wrap > .search button{
    border:none;
    background:#ff49d6;
    color:#fff;
}
.header-wrap > .search input{
    width:300px;
    border:1px solid #d2d2d2
}
.header-wrap span.title{
    font-weight:700;
    font-size:20px;
    font-family:'Titillium';
}
</style>