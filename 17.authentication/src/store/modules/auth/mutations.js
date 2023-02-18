export default {
  setStorage(userId, token, tokenExpiration) {
    localStorage.setItem("userId", userId);
    localStorage.setItem("token", token);
    localStorage.setItem("tokenExpiration", tokenExpiration);
  },
  clearStorage(state) {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
    state.authed = false;
  },
  setUser(state, payload) {
    console.log("payload:", payload);
    state.userId = payload.userId;
    state.token = payload.token;
    state.tokenExpiration = payload.tokenExpiration;
    localStorage.setItem("userId", state.userId);
    localStorage.setItem("token", state.token);
    localStorage.setItem("tokenExpiration", state.tokenExpiration);
    state.authed = true;
  },
};
