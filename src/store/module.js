import { createStore } from 'vuex'
//模块化vuex
const moduleA = {
  state: () => ({ count: 0 }),
  mutations: {
    increment(state) {
      state.count++
    }
  },
  // actions: { ... },
  // getters: { ... }
}

const moduleB = {
  state: () => ({ count: 0 }),
  mutations: {
    increment(state) {
      state.count++
    }
  },
  // actions: { ... }
}

const store = createStore({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

export default store