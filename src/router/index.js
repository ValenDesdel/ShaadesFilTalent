import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/news/Index';
import Create from "@/views/news/Create";
import CreateBasic from "@/views/news/CreateBasic";
import CreatePublication from "@/views/news/CreatePublication";
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
    path: "/createbasic",
    name: CreateBasic,
    component: CreateBasic,
  },
  {
    path: "/detail-new",
    name: DetailNew,
    component: DetailNew
  },
  {
    path: "/create-publication",
    name: CreatePublication,
    component: CreatePublication
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
