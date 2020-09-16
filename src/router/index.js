import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/news/Index';
import Create from "@/views/news/Create";
import DetailNew from "@/views/news/DetailNew";
const routes = [
  {
    path: "/",
    name: Index,
    component: Index,
  },
  {
    path: "/create",
    name: Create,
    component: Create,
  },
  {
    path: "/detail-new",
    name: DetailNew,
    component: DetailNew
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
