import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
// Create a new store instance.
export default createStore({
  state,
  mutations
})
