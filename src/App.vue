<script setup lang="ts">
import SideBar from "./components/SideBar.vue";
import MainPage from "./components/MainPage.vue";
</script>

<template>
  <div class="page">
    <SideBar />
    <MainPage />
  </div>
</template>

<style scoped>
.page {
  display: flex;
}
</style>
