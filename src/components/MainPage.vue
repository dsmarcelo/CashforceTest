<script setup lang="ts">
import ContentsHeader from "./ContentsHeader.vue";
import ContentTable from "./ContentTable.vue";
import PageHeader from "./PageHeader.vue";
import { ref, onMounted } from "vue";
import type IOrder from "../interfaces/order.interface";

const orders = ref<IOrder[]>([]);
const loading = ref(true);

const fetchData = async () => {
  try {
    orders.value = await (
      await fetch(`http://localhost:3000/api/orders`, {
        mode: "cors",
      })
    ).json();
  } catch (e) {
    console.error(e);
  }
  loading.value = false;
};

onMounted(() => {
  fetchData();
});
</script>
<template>
  <div class="content">
    <ContentsHeader />
    <template v-if="loading">
      <h1 class="loading-text">Carregando...</h1>
    </template>
    <template v-else>
      <main class="main-content">
        <PageHeader :title="'Notas fiscais'" />
        <ContentTable :data="orders" />
      </main>
    </template>
  </div>
</template>

<style scoped>
.loading-text {
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
}

.content {
  width: 100%;
  min-height: 100vh;
  box-shadow: 0px 10px 30px rgba(225, 229, 236, 0.5);
  border-radius: 15px 0 0 15px;
  background-color: var(--color-background);
  z-index: 20;
}

.main-content {
  display: flex;
  flex-direction: column;
  padding: 40px 48px 40px 48px;
}
</style>
