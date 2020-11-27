<template>
  <data-table>
    <template #head>
      <thead>
        <tr>
          <th class="th-left" style="width: 30rem">Cliente</th>
          <th class="th-left">email</th>
          <th class="th-left"></th>
        </tr>
      </thead>
    </template>
    <tbody>
      <inspeccionar-table-row
        v-for="(user, index) in users"
        :key="index"
        :user="user"
        :index="index"
      />
    </tbody>
  </data-table>
</template>

<script>
import DataTable from "@/components/DataTable/DataTable.vue";

import axiosClient from "@/axiosClient";
import InspeccionarTableRow from "./InspeccionarTableRow.vue";

export default {
  components: { DataTable, InspeccionarTableRow },
  async setup() {
    const users = await axiosClient.get("/api/users?page=2");
    console.log(
      "🚀 ~ file: InspeccionarTable.vue ~ line 24 ~ setup ~ users",
      users
    );

    return {
      users: users.data.data,
    };
  },
};
</script>

<style , DataTableDatalang="css" scoped>
.th-left {
  text-align: left;
  padding-left: 2.5rem;
}
</style>
