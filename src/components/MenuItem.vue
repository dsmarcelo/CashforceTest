<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <router-link :to="`/`" class="menu-item active">
    <div class="menu-item-sidebar"></div>
    <img
      viewBox="0 0 24 24"
      class="icon-menu-proposta"
      src="/icon_menu_proposta_selected.svg"
      alt="Icone Notas Fiscais"
    />
    <p class="menu-item-name">{{ name }}</p>
  </router-link>
</template>

<style>
.menu-item {
  font-weight: 500;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--n-dark);
  padding: 0px;
  gap: 21px;
  height: 64px;
  width: 288px;
  transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.selected {
  color: #00ad8c;
}

.active {
  color: var(--p-green);
}

.menu-item-sidebar {
  position: relative;
  width: 4px;
  height: 64px;
  background: var(--p-green);
  border-radius: 0 4px 4px 0;
}

.menu-item:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}

.menu-item:hover > .menu-item-sidebar {
  transition: 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  width: 8px;
}
</style>
