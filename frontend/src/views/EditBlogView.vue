<script setup lang="ts">
import store from "@/store";
import { computed } from "vue";
import { useRoute } from "vue-router";
import router from "../router";

const blogs = computed(() => store.state.blogs);
const route = useRoute();
const blog = computed(() => {
  return blogs.value.find((blogId) => blogId.id === Number(route.params.id));
});
const updateBlog = async () => {
  const updateBlog = await store.dispatch("editBlog", blog);
  router.push({ name: "show-blog", params: { id: updateBlog.id } });
};
</script>
<template>
  <div>
    <h2>Edit Blog</h2>
    <form>
      <v-text-field v-model="blog!.title" label="Title"></v-text-field>
      <v-textarea v-model="blog!.body" label="Body"></v-textarea>
      <v-btn class="mr-4" @click="updateBlog">Update</v-btn>
    </form>
  </div>
</template>
<style scoped></style>
