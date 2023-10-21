import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: 1,
      name: "游客",
      img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F91%2F81%2Fd7%2F9181d7d8787f7e96f0017da5e61ad27d.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656570079&t=66af8273b428b2f840297aa289a3fb5f",
    },
  },
  getters: {},
  mutations: {
    setUser(state, value) {
      state.user = value
    }

  },
  actions: {},
  modules: {}
})