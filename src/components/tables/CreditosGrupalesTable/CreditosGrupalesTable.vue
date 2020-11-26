<template>
  <data-table>
    <tbody>
      <creditos-grupales-table-row
        v-for="(credito, index) in creditos"
        :key="index"
        :credito="credito"
        :index="index"
      />
    </tbody>
  </data-table>
</template>

<script>
import DataTable from "@/components/DataTable/DataTable.vue";

import axiosClient from "@/axiosClient";
import creditosMock from "@/mocks/creditosGrupales.json";
import CreditosGrupalesTableRow from "./CreditosGrupalesTableRow.vue";

export default {
  components: { DataTable, CreditosGrupalesTableRow },
  async setup() {
    const creditos = await axiosClient.get("/api/unknown");

    // mocking data
    const setMockData = new Promise((resolve) => {
      setTimeout(() => {
        creditos.data = creditosMock;
        resolve(creditos);
      }, 1000);
    });

    await setMockData;

    return {
      creditos: creditos.data,
    };
  },
};
</script>

<style , DataTableDatalang="scss" scoped></style>
