<script setup lang="ts">
import { mapState } from "vuex";
import { computed, ref } from "vue";
import store from "@/store";
import AddBlog from "./AddBlog.vue";

type Blog = {
  id: number;
  title: string;
  body: string;
  created_at: Date;
  updated_at: Date;
};
const blogs = computed(() => store.state.blogs);
const onSubmit = () => {
  console.log("test");
};
const deleteBlog = (blog: Blog) => {
  store.dispatch("deleteBlog", blog);
  store.commit("setMessage", {
    status: true,
    message: "Blog was successfully destroyed.",
  });
  setTimeout(() => {
    store.commit("setMessage", {});
  }, 2000);
};
</script>
<template>
  <div class="about">
    <h1>Blogs</h1>
    <v-row>
      <v-col cols="4">
        <AddBlog />
      </v-col>
      <v-col cols="8">
        <table>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
          <tr v-for="blog in blogs" :key="blog.id">
            <td>{{ blog.title }}</td>
            <td>{{ blog.body }}</td>
            <td>
              <router-link :to="{ name: 'show-blog', params: { id: blog.id } }"
                >Show</router-link
              >
            </td>
            <td>
              <router-link :to="{ name: 'edit-blog', params: { id: blog.id } }"
                >Edit</router-link
              >
            </td>
            <td>
              <span class="button_link" @click="deleteBlog(blog)"
                >[Delete]</span
              >
            </td>
          </tr>
        </table>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
.button_link {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
</style>
