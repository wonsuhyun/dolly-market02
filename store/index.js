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

export const actions = {
    testAction({commit},items){
        items.map( item =>{
            var today = new Date;
            var week = new Date(today.getFullYear(),today.getMonth(),today.getDate()-7);
            var itemArr = item.create_date.split('-');
            var createDate = new Date(itemArr[0],itemArr[1]-1, Number(itemArr[2].slice(0,2)))
            itemArr[2] = itemArr[2].slice(0,2)
            var dateSet = itemArr.join('.')
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