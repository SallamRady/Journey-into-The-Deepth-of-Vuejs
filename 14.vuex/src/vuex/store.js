import { createStore } from "vuex";
import counterModule from './modules/counter.module';

const store = createStore({
    modules:{counterModule}
});

export default store;