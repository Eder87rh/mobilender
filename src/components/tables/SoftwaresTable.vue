<template>
  <data-table>
    <tbody>
      <data-table-row>
        <data-table-data>
          <counter-square>
            01
          </counter-square>
        </data-table-data>
        <data-table-data style="flex: 0 1 12rem">
          <h2 style="color: white;">
            Siebel
          </h2>
        </data-table-data>
        <data-table-data style="flex:1">
          Crédito Grupal
        </data-table-data>
        <data-table-data>
          <i class="fas fa-chevron-right" style="color:grey"></i>
        </data-table-data>
      </data-table-row>
      <data-table-row>2</data-table-row>
      <data-table-row>3</data-table-row>
    </tbody>
  </data-table>
</template>

<script>
import CounterSquare from "../CounterSquare.vue";
import DataTable from "../DataTable/DataTable.vue";
import DataTableData from "../DataTable/DataTableData.vue";
import DataTableRow from "../DataTable/DataTableRow.vue";
export default {
  components: { DataTableRow, DataTable, DataTableData, CounterSquare },
};
</script>

<style , DataTableDatalang="scss" scoped></style>
