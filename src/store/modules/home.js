const types = {
  SET_USER_NAME: 'SET_USER_NAME'
}
export default {
  // 默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的
  // 如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。
  // 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
  namespaced: true,
  state: {
    username: ''
  },
  // 对于模块内部的 getter，
  // 接收的第一个参数是模块的局部状态对象，
  // 根节点状态会作为第三个参数暴露出来
  // 在这个模块的 getter 中，`getters` 被局部化了
  // 你可以使用 getter 的第四个参数来调用 `rootGetters`
  getters: {
    getUserName (state, getters, rootState, rootGetters) {
      // getters.someOtherGetter // -> 'foo/someOtherGetter'
      // rootGetters.someOtherGetter // -> 'someOtherGetter'
      return state.username
    }
  },
  // 对于模块内部的 mutation，
  // 接收的第一个参数是模块的局部状态对象
  mutations: {
    [types.SET_USER_NAME] (state, username) {
      state.username = username
    }
  },
  // 对于模块内部的 action，
  // 局部状态通过 context.state 暴露出来，
  // 根节点状态则为 context.rootState
  // 在这个模块中， dispatch 和 commit 也被局部化了
  // 他们可以接受 `root` 属性以访问根 dispatch 或 commit
  actions: {
    setUserName ({ dispatch, commit, getters, rootGetters }, username) {
      // dispatch('someOtherAction') // -> 'foo/someOtherAction'
      // dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'
      // commit('someMutation') // -> 'foo/someMutation'
      // commit('someMutation', null, { root: true }) // -> 'someMutation'
      commit(types.SET_USER_NAME, username)
    }
  }
}
