<template>
  <div class="home">
    <h1>Welcome to Blog App!</h1>
    <router-link to="/blogs"></router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",

  components: {},
});
</script>
