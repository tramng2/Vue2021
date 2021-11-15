import { createRouter, createWebHistory } from "vue-router";
import HerosApp from "./pages/HeroApp.vue";
import Calendar from "./pages/Calendar.vue";
import Home from "./pages/Home.vue";
import Markdown from "./pages/Markdown.vue";
import Slider from "./pages/Slider.vue";
import Calculator from "./pages/Calculator.vue";
import Modal from "./pages/ReuseableModal.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/hero", component: HerosApp },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
  { path: "/calculator", component: Calculator },
  { path: "/modal", component: Modal },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
