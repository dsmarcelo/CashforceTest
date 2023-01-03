<script setup lang="ts">
defineProps({
  title: String,
});
</script>

<template>
  <div class="page-header">
    <div class="container">
      <img class="icon-menu-proposta" src="/icon_menu_proposta.png" />
      <h3 class="page-header-title">{{ title }}</h3>
    </div>
    <p class="page-header-description">
      Visualize as notas fiscais que você tem.
    </p>
  </div>
</template>

<style>
.page-header {
  height: 53px;
  max-width: 80%;
  margin-bottom: 19px;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9px;
}

.page-header-title {
  color: var(--p-darkblue);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
}

.icon-menu-proposta {
  width: 24px;
}

.page-header-description {
  font-weight: 400;
  font-size: 14px;
  margin-top: 5px;
  color: var(--n-dark-4);
}
</style>
