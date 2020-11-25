<template>
  <data-table-row>
    <data-table-data>
      <counter-square>
        {{ index }}
      </counter-square>
    </data-table-data>
    <data-table-data style="flex: 0 1 20rem">
      <h3 style="color: white;">
        {{ software.name }}
      </h3>
    </data-table-data>
    <data-table-data style="flex:1">
      {{ software.type }}
    </data-table-data>
    <data-table-data>
      <i class="fas fa-chevron-right" style="color:grey"></i>
    </data-table-data>
  </data-table-row>
</template>

<script>
import CounterSquare from "@/components/CounterSquare.vue";
import DataTableData from "@/components/DataTable/DataTableData.vue";
import DataTableRow from "@/components/DataTable/DataTableRow.vue";
export default {
  props: {
    software: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  components: { DataTableRow, DataTableData, CounterSquare },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
