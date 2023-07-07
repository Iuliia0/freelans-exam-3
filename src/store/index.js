import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [],
  },
  getters: {},
  mutations: {
    pushTask(state, value) {
      state.tasks.push(value.value)
    }
  },
  actions: {},
  modules: {},
});
