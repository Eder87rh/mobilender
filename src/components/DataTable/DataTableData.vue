<template>
  <td class="datatable-data">
    <slot></slot>
  </td>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.datatable-data {
  padding: 0 1rem 0 1rem;
  display: flex;
  align-items: center;
}
</style>
