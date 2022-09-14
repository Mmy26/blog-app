<script setup lang="ts">
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

type Blog = {
  id: number;
  title: string;
  body: string;
  created_at: Date;
  updated_at: Date;
};
const blog: Blog = reactive({
  id: 0,
  title: "",
  body: "",
  created_at: new Date(),
  updated_at: new Date(),
});
const store = useStore();
const router = useRouter();
const testForm = ref();
const onSubmit = async (): Promise<void> => {
  //if (testForm.value.checkFrom.validate()) {
  const newBlog = await store.dispatch("addBlog", blog);
  store.commit("setMessage", {
    status: true,
    message: "Blog was successfully created.",
  });
  setTimeout(() => {
    store.commit("setMessage", {});
  }, 2000);
  router.push({ name: "show-blog", params: { id: newBlog.id } });
  //}

  // blog.title = "";

  // blog.body = "";

  // router.push({ name: "show-blog", params: { id: newBlog.id } });
};
const required = (propertyType: any) => {
  return (v: string | any[]) =>
    (v && v.length > 0) || `You must input a ${propertyType}`;
};
</script>
<template>
  <v-form ref="checkFrom">
    <v-text-field
      v-model="blog.title"
      label="Title"
      :rules="[required('Title')]"
    ></v-text-field>
    <v-textarea
      v-model="blog.body"
      label="Body"
      :rules="[required('Body')]"
    ></v-textarea>
    <v-btn class="mr-4" @click="onSubmit">Create</v-btn>
  </v-form>
</template>
<style scoped></style>
