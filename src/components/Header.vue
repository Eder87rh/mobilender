<template>
  <header id="header">
    <div class="header__container">
      <h1>Integra<span class="software">Software</span></h1>
      <UserSettings
        v-if="$route.name !== 'Login'"
        firstName="Eder"
        lastName="Ramírez"
      />
    </div>
  </header>
</template>

<script>
import UserSettings from "./UserSettings";

export default {
  setup() {
    return {};
  },
  components: {
    UserSettings,
  },
};
</script>

<style lang="css" scoped>
#header {
  position: fixed;
  top: 0;

  display: flex;
  justify-content: center;
  width: 100%;
  height: 6.4rem;
  background-color: var(--secondary-color);
  font-size: 1.4rem;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}

.software {
  color: var(--accent-color);
}
</style>
