import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    getters,
    mutations,
    state,
    actions,
    plugins: [createPersistedState()],
    strict: process.env.NODE_ENV !== 'production'
})
