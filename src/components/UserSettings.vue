<template>
  <div class="user-settings">
    <div class="user-settings__name">
      {{ name }}
    </div>
    <div class="user-settings__avatar">
      <span>{{ initials }}</span>
    </div>
    <div class="user-settings__settings">
      v
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
