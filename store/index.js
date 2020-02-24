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

export const action = {
    testAction({commit},item){
        commit("testmutation",item)
    }
}