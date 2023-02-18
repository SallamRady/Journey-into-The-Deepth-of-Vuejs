import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  state() {
    return {
      authed:false,
      userId: null,
      token: null,
      tokenExpiration: null,
    };
  },
  mutations,
  getters,
  actions,
};
