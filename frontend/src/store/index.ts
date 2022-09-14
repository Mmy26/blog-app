import { createStore } from "vuex";
import axios from "@/api/index";

type Blog = {
  id: number;
  title: string;
  body: string;
  created_at: Date;
  updated_at: Date;
};

export default createStore({
  state: {
    blogs: new Array<Blog>(),
    flash_message: {
      status: false,
      message: "",
    },
  },
  mutations: {
    FETCH_BLOGS(state, blogs) {
      state.blogs = blogs;
      console.log(state.blogs);
    },
    ADD_BLOG(state, blog) {
      const blogs = state.blogs.concat(blog);
      state.blogs = blogs;
      console.log(state.blogs);
    },
    EDIT_BLOG(state, blog) {
      state.blogs.forEach((b) => {
        if (b.id === blog.id) {
          b = blog;
        }
      });
    },
    DELETE_BLOG(state, blogId) {
      const blogs = state.blogs.filter((b) => b.id != blogId);
      state.blogs = blogs;
    },
    setMessage(state, payload) {
      state.flash_message = payload;
    },
  },
  actions: {
    async fetchBlogs({ commit }) {
      await axios()
        .get("/blogs")
        .then((res) => {
          console.log(res);

          commit("FETCH_BLOGS", res.data);
        })
        .catch((e) => console.log(e));
    },
    async addBlog({ commit }, blog) {
      const res = await axios().post("/blogs", blog);
      const savedBlog = res.data;
      commit("ADD_BLOG", savedBlog);
      return savedBlog;
    },
    async editBlog({ commit }, blog) {
      const res = await axios().put(`/blogs/${blog.id}`, blog);
      const editedBlog = res.data;
      commit("EDIT_BLOG", editedBlog);
      return editedBlog;
    },
    async deleteBlog({ commit }, blog) {
      await axios().delete(`/blogs/${blog.id}`, blog);
      commit("DELETE_BLOG", blog.id);
    },
  },
  getters: {},
  modules: {},
});
