import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
// import * as mutationsTypes from './mutations-types'
import mutations from './mutations'
import state from './state'
// 此插件可以方便看到log日志
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// 调试工具
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug, //检查state的修改是否来自mutations
  plugins: debug ? [createLogger()] : []
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
})
