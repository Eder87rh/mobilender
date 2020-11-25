<template>
  <header id="header">
    <div class="container">
      <h1>Integra<span class="software">Software</span></h1>
      <div class="user-settings">
        User settings
      </div>
    </div>
  </header>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
#header {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 7rem;
  background-color: var(--secondary-color);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}

.software {
  color: var(--accent-color);
}
</style>
