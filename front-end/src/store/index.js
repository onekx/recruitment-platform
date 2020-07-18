import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userId: '',
        role: '',
        city: '全国站'
    },
    mutations: {
        initialState(state, payload) {
            state.userId = payload.id
            state.role = payload.role
        },
        setCity(state, payload) {
            state.city = payload.city
        }
    }
})

export default store