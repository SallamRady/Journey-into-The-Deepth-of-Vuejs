import { createStore } from "vuex";
import cartModule from "./modules/card.module";
import authModule from "./modules/auth.module";

const store = createStore({
  modules: { cartModule, authModule },
});

export default store;
