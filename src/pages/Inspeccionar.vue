<template>
  <div>
    <NavigationTitle>
      <template #back-button>
        <circle-button :action="() => $router.back()">
          <i class="fas fa-arrow-left"></i>
        </circle-button>
      </template>

      <template #icon>
        <i class="fas fa-search"></i>
      </template>

      Inspeccionar
    </NavigationTitle>
    <div v-if="error">
      {{ error }}
    </div>
    <Suspense>
      <template #default>
        <inspeccionar-table />
      </template>
      <template #fallback>
        <loader />
      </template>
    </Suspense>
  </div>
</template>

<script>
import { ref, onErrorCaptured } from "vue";
import CircleButton from "../components/CircleButton.vue";
import NavigationTitle from "../components/NavigationTitle.vue";
import InspeccionarTable from "../components/tables/InspeccionarTable/InspeccionarTable.vue";
import Loader from "../components/Loader.vue";
export default {
  components: {
    NavigationTitle,
    CircleButton,
    InspeccionarTable,
    Loader,
  },
  setup() {
    const error = ref(null);
    onErrorCaptured((e) => {
      error.value = e;
      return true;
    });
    return { error };
  },
};
</script>

<style lang="css" scoped></style>
