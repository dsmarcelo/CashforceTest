<script setup lang="ts">
import moment from "moment";
const props = defineProps({
  order: { type: Object, required: true },
});

const formatValue = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function getStatusBuyer() {
  const statusList = [
    "Pendente de confirmação",
    "Pedido confirmado",
    "Não reconhece o pedido",
    "Mercadoria não recebida",
    "Recebida com avaria",
    "Devolvida",
    "Recebida com devolução parcial",
    "Recebida e confirmada",
    "Pagamento Autorizado",
  ];

  const statusIndex = props.order.orderStatusBuyer;
  const status = statusList[+statusIndex];

  return status;
}

const getDate = () => {
  const date = new Date(props.order.emissionDate);
  return moment(date).format("DD/MM/YYYY");
};
</script>

<template>
  <tr class="item-row">
    <td>{{ order.nNf }}</td>
    <td>{{ order.buyer_name }}</td>
    <td>{{ order.provider_name }}</td>
    <td>{{ getDate() }}</td>
    <td class="value">{{ formatValue.format(order.value) }}</td>
    <td class="status">{{ getStatusBuyer() }}</td>
    <td class="td-button">
      <button class="btn-provider-data">Dados do cedente</button>
    </td>
  </tr>
</template>

<style>
.item-row {
  height: 48px;
}

.value {
  color: var(--p-green);
  font-weight: 500;
}

.status {
  color: var(--p-green);
  font-weight: 700;
  text-transform: uppercase;
}

.td-button {
  width: 174px;
  text-align: right;
  padding: 0;
}

.btn-provider-data {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 165px;
  height: 32px;
  border: 1px solid var(--color-border-2);
  border-radius: 24px;
  font-weight: bold;
  font-size: 12px;
  color: var(--n-dark-4);
  background-color: var(--p-white);
}

.btn-provider-data:hover {
  background-color: var(--n-mid-4);
}

td {
  border: 1px solid var(--color-border);
  border-style: solid none;
  font-weight: 500;
  font-size: 14px;
  padding-right: 12px;
}

td:first-child {
  border-left-style: solid;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-left: 30px;
}

td:last-child {
  border-right-style: solid;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
