<script setup lang="ts">
import ContentsHeader from "./ContentsHeader.vue";
</script>
<template>
  <div class="content">
    <ContentsHeader />
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  min-height: 100vh;
  box-shadow: 0px 10px 30px rgba(225, 229, 236, 0.5);
  border-radius: 15px 0 0 15px;
  background-color: var(--color-background);
}
</style>
