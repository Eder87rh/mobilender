<template>
  <data-table-row>
    <data-table-data class="archivo">
      {{ credito.archivo }}
    </data-table-data>
    <data-table-data style="flex: 1;">
      {{ credito.expedicion }}
    </data-table-data>
    <data-table-data style="flex: 1;">
      {{ credito.calidadInformacion }}
    </data-table-data>
    <data-table-data
      style="flex: 1;"
      :class="getStatusStyleObj(credito.estatus)"
    >
      {{ credito.estatus }}
    </data-table-data>
    <data-table-data style="flex: 1;">
      {{ credito.finalizacion }}
    </data-table-data>
    <data-table-data style="flex: 1;">
      {{ credito.usuario }}
    </data-table-data>
    <data-table-data>
      <i class="fas fa-plus-square table-action-button "></i>
    </data-table-data>
    <data-table-data>
      <i class="fas fa-chevron-right table-action-button "></i>
    </data-table-data>
  </data-table-row>
</template>

<script>
import DataTableData from "@/components/DataTable/DataTableData.vue";
import DataTableRow from "@/components/DataTable/DataTableRow.vue";
export default {
  props: {
    credito: {
      type: Object,
      required: true,
    },
  },
  components: { DataTableRow, DataTableData },
  setup() {
    const getStatusStyleObj = (status) => {
      console.log(
        "🚀 ~ file: CreditosGrupalesTableRow.vue ~ line 63 ~ getStatusStyleObj ~ status",
        status
      );
      switch (status) {
        case "Finalizado":
          return {
            "text-green": true,
          };
        case "En proceso":
          return {
            "text-yellow": true,
          };
        case "Rechazado":
          return {
            "text-red": true,
          };
        default:
          return { "text-green": false };
      }
    };
    return { getStatusStyleObj };
  },
};
</script>

<style lang="css" scoped>
.text-red {
  color: rgb(170, 55, 55);
}

.text-green {
  color: var(--accent-color);
}

.text-yellow {
  color: rgb(211, 211, 44);
}
.archivo {
  /* flex: 1 0 20rem; */
  font-size: 1.5rem;
  text-decoration: underline;
  cursor: pointer;
}

.table-action-button {
  color: grey;
  cursor: pointer;
}
</style>
