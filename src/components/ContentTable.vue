<script setup lang="ts">
import ContentRow from "./ContentRow.vue";

defineProps({
  data: Object,
});
</script>

<template>
  <div class="table-container">
    <table class="table">
      <thead>
        <tr class="top-row">
          <th>Nota fiscal</th>
          <th>Sacado</th>
          <th>Cedente</th>
          <th>Emissão</th>
          <th>Valor</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <ContentRow v-for="item in data" :order="item" :key="item.id" />
      </tbody>
    </table>
  </div>
</template>

<style>
.table-container {
  overflow-x: auto;
  max-width: 1920px;
}

.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 16px;
}

th {
  padding-right: 12px;
}

table th:first-child,
tr:first-child {
  padding-left: 30px;
}

.top-row {
  text-align: left;
  color: var(--n-mid-1);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
}
</style>
