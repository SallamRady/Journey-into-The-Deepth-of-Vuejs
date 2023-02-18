export default {
  isLoggedIn(state) {
    return "userId" in localStorage || state.authed;
  },
  token(state) {
    return state.token;
  },
  userId(state) {
    return state.userId;
  },
};
