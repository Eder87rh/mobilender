<template>
  <data-table-row>
    <data-table-data style="width: 25rem">
      <div class="software-data">
        <counter-square>
          {{ index }}
        </counter-square>
        <h3 class="software-name">
          {{ software.name }}
        </h3>
      </div>
    </data-table-data>
    <data-table-data>
      {{ software.type }}
    </data-table-data>
    <data-table-data class="chevron-data">
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

<style lang="css" scoped>
.software-data {
  display: flex;
  align-items: center;
  width: 25rem;
}

.software-name {
  color: white;
  margin-left: 2rem;
}

.chevron-data {
  width: 5rem;
}
</style>
