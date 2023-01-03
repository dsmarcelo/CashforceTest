<script setup lang="ts">
import MenuItem from "../components/MenuItem.vue";

const list = [{ id: 1, name: "Notas fiscais" }];
</script>

<template>
  <aside class="sider-financiador">
    <div class="nav-container">
      <a href="/" class="menu-hero">
        <img class="main-logo" src="/Logo.svg" />
      </a>
      <nav v-for="item in list" :key="item.name">
        <MenuItem :name="item.name" :id="item.id" />
      </nav>
    </div>
  </aside>
</template>

<style scoped>
.sider-financiador {
  min-width: 288px;
  height: 100vh;
  transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  overflow: hidden;
}

.nav-container {
  display: flex;
  flex-direction: column;
  position: fixed;
  transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.menu-hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 80px;
}

.main-logo {
  width: 160px;
  margin-left: 24px;
  transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

@media screen and (max-width: 1280px) {
  .sider-financiador {
    min-width: 70px;
    overflow: hidden;
    transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  .nav-container {
    transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  .main-logo {
    width: 60px;
    margin-left: 4px;
    transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
}
</style>
