<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
import { ref, provide } from 'vue';

export default {
  setup() {
    const test = ref('')

provide('test', test)
  },
  components: {
    TheNavbar,
  },
};
</script>

<style></style>
