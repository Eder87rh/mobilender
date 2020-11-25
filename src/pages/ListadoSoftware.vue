<template>
  <div>
    <NavigationTitle>
      <template v-slot:back-button>
        <circle-button>
          <i class="fas fa-arrow-left"></i>
        </circle-button>
      </template>
      <template v-slot:icon>
        <i class="far fa-file-excel"></i>
      </template>
      Listado de softwares
    </NavigationTitle>
  </div>
</template>

<script>
import CircleButton from "../components/CircleButton.vue";
import NavigationTitle from "../components/NavigationTitle.vue";
export default {
  components: { NavigationTitle, CircleButton },
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped></style>
