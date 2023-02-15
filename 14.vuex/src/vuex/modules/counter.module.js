export default {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increaseByOne(state) {
      state.counter++;
    },
    increaseByValue(state, payload) {
      state.counter += payload.value;
    },
  },
  actions: {
    increase(context) {
      let { commit } = context;
      setTimeout(() => {
        console.log("call mutation function from action");
        commit("increaseByOne");
      }, 2000);
    },
  },
  getters: {
    counter(state) {
      return state.counter;
    },
    favoriteNumber(_, getters) {
      return getters.counter * 2;
    },
  },
};
