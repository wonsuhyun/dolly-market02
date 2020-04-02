export const state = () => ({
    items: []
})

export const mutations = {
    setItems(state, items) {
        state.items = items
    }
}
export const getters = {
    // getItem: (state) => (id) => {
    //     var obj
    //     state.items.some((item) => {
    //         if (item.pid == id) {
    //             obj = item
    //             return false
    //         }
    //     })
    //     return obj
    // }
    getItems(state) {
        const { items } = state
        items.map(item => {
            // 1주일 단위로 new Data 생성
            var today = new Date
            var week = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)
            var itemArr = item.createDate.split('-')
            var createDate = new Date(itemArr[0], itemArr[1] - 1, Number(itemArr[2].slice(0, 2)))
            var dateSet

            itemArr[2] = itemArr[2].slice(0, 2)
            dateSet = itemArr.join('.')
            item.create = dateSet

            if (week < createDate) {
                item.isNew = true
            } else {
                item.isNew = false
            }
        })
        return items
    }
}
export const actions = {
    async nuxtServerInit({ dispatch, getters }, { app }) {
        const { data } = await app.$axios.get(`/api/items`)
        dispatch("setItems", data)
    },
    setItems({ commit }, items) {
        commit("setItems", items)
    }
}