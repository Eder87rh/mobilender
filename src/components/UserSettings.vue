<template>
  <div class="user-settings">
    <div class="user-settings__name">
      {{ name }}
    </div>
    <div class="user-settings__avatar">
      <span>{{ initials }}</span>
    </div>
    <div class="user-settings__settings">
      <i class="fas fa-chevron-down" style="color:grey"></i>
    </div>
    <div class="user-settings__options">
      <ul>
        <li>Cerrar Sesión</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const name = ref("Eder Ramírez");
    const initials = computed(function() {
      const nameArr = name.value.split(" ");
      const firstLetter = nameArr[0].split("")[0];
      const secondLetter = nameArr[1].split("")[0];
      return firstLetter + secondLetter;
    });

    return {
      name,
      initials,
    };
  },
};
</script>

<style lang="css" scoped>
.user-settings {
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;
  padding: 1rem;
  position: relative;
  width: 20rem;
}

.user-settings:hover {
  background-color: var(--primary-color);
}

.user-settings:hover .user-settings__options {
  transition: all 0.5s ease;
  transform: translateY(6rem);
  opacity: 100%;
}

.user-settings__options {
  opacity: 0%;
  background-color: var(--secondary-color);
  position: absolute;
  left: 0rem;
  width: 20rem;
}

.user-settings__options > ul {
  text-decoration: none;
  list-style-type: none;
}

.user-settings__options > ul > li {
  padding: 2rem;
}

.user-settings__avatar {
  width: 4rem;
  height: 4rem;
  background-color: var(--grey-light-color);
  border-radius: 50%;
  margin-left: 2rem;
  margin-right: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
}
</style>
