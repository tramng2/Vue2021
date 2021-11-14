import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./utilities/firebase";
import router from "./router";

initializeApp(firebaseConfig);
const app = createApp(App);
app.use(router);
app.mount("#app");
