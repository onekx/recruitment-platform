import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userId: '',
        role: ''
    },
    mutations: {
        initialState(state, payload) {
            state.userId = payload.id
            state.role = payload.role
        }
    }
})

export default store