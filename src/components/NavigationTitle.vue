<template>
  <div class="navigation-title">
    <i class="far fa-file-excel navigation-title__icon"></i>
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script>
//import { ref } from "vue";
export default {
  props: {
    title: String,
  },
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

.navigation-title__icon {
  margin-right: 1.5rem;
}
</style>
