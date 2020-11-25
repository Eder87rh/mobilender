<template>
  <tr>
    <div class="datatable-row">
      <slot></slot>
    </div>
  </tr>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.datatable-row {
  background-color: var(--secondary-color);
  border-radius: 0.8rem;
  padding: 1rem 2rem 1rem 2rem;
  margin-bottom: 1rem;

  display: flex;
}
</style>
