<template>
  <data-table-row>
    <data-table-data>
      <user-avatar
        :firstName="user.first_name"
        :lastName="user.last_name"
        :image="user.avatar"
      />
    </data-table-data>
    <data-table-data style="flex: 0 1 20rem">
      <h3 style="color: white;">
        {{ fullName }}
      </h3>
    </data-table-data>
    <data-table-data>
      {{ user.email }}
    </data-table-data>
    <data-table-data>
      <i class="fas fa-chevron-right" style="color:grey"></i>
    </data-table-data>
  </data-table-row>
</template>

<script>
import DataTableData from "@/components/DataTable/DataTableData.vue";
import DataTableRow from "@/components/DataTable/DataTableRow.vue";
import UserAvatar from "../../userAvatar.vue";

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  components: { DataTableRow, DataTableData, UserAvatar },
  setup(props) {
    const fullName = props.user.first_name + " " + props.user.last_name;
    return { fullName };
  },
};
</script>

<style lang="scss" scoped></style>
