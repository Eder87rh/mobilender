<template>
  <data-table>
    <tbody>
      <data-table-row>
        <data-table-data>1</data-table-data>
        <data-table-data style="flex:1">2</data-table-data>
        <data-table-data>3</data-table-data>
      </data-table-row>
      <data-table-row>2</data-table-row>
      <data-table-row>3</data-table-row>
    </tbody>
  </data-table>
</template>

<script>
import DataTable from "../DataTable/DataTable.vue";
import DataTableData from "../DataTable/DataTableData.vue";
import DataTableRow from "../DataTable/DataTableRow.vue";
export default {
  components: { DataTableRow, DataTable, DataTableData },
};
</script>

<style , DataTableDatalang="scss" scoped></style>
