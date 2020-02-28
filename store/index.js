export const state = () => ({
    items:[],
    test:"hi i'm store"
})

export const mutations = {
    testmutation (item) {
        state.test = item
    },
    setItem(state,items){
        // items.map((item)=>{
        //     state.items.push(item)
        // })
        state.items = items
    }
}
export const getters ={
    getItem: (state)=>(id)=>{
        var obj;
        state.items.some((item)=>{
            if(item.pid == id){
                obj = item;
                return false
            }
        })
        return obj
    }
}
export const actions = {
    async nuxtServerInit({dispatch},app){
        // localforage 에 접근후 item data 없을시에 통신 후 값 셋팅하는 로직 추가하기
        let res = await app.$axios.get("/api/items")
        console.log(res.data[0]);
        app.store.dispatch("testAction",res.data);
    },
    testAction({commit},items){
        items.map( item =>{
            //1주일 단위로 new Data 생성
            var today = new Date;
            var week = new Date(today.getFullYear(),today.getMonth(),today.getDate()-7);
            var itemArr = item.create_date.split('-');
            var createDate = new Date(itemArr[0],itemArr[1]-1, Number(itemArr[2].slice(0,2)))
            var dateSet;
            
            itemArr[2] = itemArr[2].slice(0,2)
            dateSet = itemArr.join('.')
            item.create = dateSet

            if( week < createDate ){
                item.isNew=true;
            }else{
                item.isNew=false;
            }    
        })

        commit("setItem",items)
    }
}