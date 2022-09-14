<script setup lang="ts">
import store from "@/store";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import FlashView from "./FlashView.vue";

const blogs = computed(() => store.state.blogs);
const route = useRoute();

const blog = computed(() => {
  return blogs.value.find((blogId) => blogId.id === Number(route.params.id));
});
onMounted(() => {
  console.log(route.params.id);
  console.log(blog.value);
});
</script>
<template>
  <div>
    <flash-view />
    <p>Title:{{ blog!.title }}</p>
    <p>Body:{{ blog!.body }}</p>
    <router-link :to="{ name: 'edit-blog', params: { id: blog!.id } }"
      >Edit</router-link
    >
    |<router-link to="/blogs">Back</router-link>
  </div>
</template>
<style scoped></style>
