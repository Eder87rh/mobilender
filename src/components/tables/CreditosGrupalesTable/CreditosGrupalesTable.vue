<template>
  <data-table>
    <template #head>
      <thead>
        <tr>
          <th class="th-left">Archivo</th>
          <th class="th-left">Expedición</th>
          <th class="th-left">% Calidad de la información</th>
          <th class="th-left">Estatus</th>
          <th class="th-left">Finalización</th>
          <th class="th-left">Usuario</th>
          <th class="th-left">Acciones</th>
          <th class="th-left"></th>
        </tr>
      </thead>
    </template>
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

<style lang="css" scoped>
.th-left {
  text-align: left;
  padding-left: 2.5rem;
}
</style>
