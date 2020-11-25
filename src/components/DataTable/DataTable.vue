<template>
  <table class="datatable">
    <slot></slot>
  </table>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.datatable {
  width: 100%;
  border-collapse: collapse;
}
</style>
