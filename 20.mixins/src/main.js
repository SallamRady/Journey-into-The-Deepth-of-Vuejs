import { createApp } from "vue";

import App from "./App.vue";
import logger from "./mixins/logger";

const app = createApp(App);

app.mixin(logger);

app.mount("#app");
