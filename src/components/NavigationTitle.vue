<template>
  <div class="navigation-title">
    <slot name="back-button"></slot>
    <slot name="icon"></slot>
    <h1 class="navigation-title__title">
      <slot />
    </h1>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.navigation-title {
  display: flex;
  align-items: center;
}

.navigation-title__title {
  margin-left: 1.5rem;
}
</style>
