import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Blogs from "../views/BlogsView.vue";
import Blog from "../views/BlogView.vue";
import EditBlog from "../views/EditBlogView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blogs",
    name: "blogs",
    component: Blogs,
  },
  {
    path: "/blog/:id",
    name: "show-blog",
    component: Blog,
  },
  {
    path: "/blog/:id/edit",
    name: "edit-blog",
    component: EditBlog,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
