<template>
  <div>
    <NavigationTitle>
      <!-- <template #back-button>
        <circle-button>
          <i class="fas fa-arrow-left"></i>
        </circle-button>
      </template> -->

      <template #icon>
        <i class="far fa-file-excel"></i>
      </template>

      Listado de softwares

      <template #action-button>
        <AppButton>
          <template #icon>
            <i class="fas fa-plus"></i>
          </template>
          Agregar Nuevo
        </AppButton>
      </template>
    </NavigationTitle>
    <div v-if="error">
      {{ error }}
    </div>
    <Suspense>
      <template #default>
        <SoftwaresTable />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { ref, onErrorCaptured } from "vue";
import AppButton from "../components/AppButton.vue";
// import CircleButton from "../components/CircleButton.vue";
import NavigationTitle from "../components/NavigationTitle.vue";
import SoftwaresTable from "../components/tables/SoftwaresTable/SoftwaresTable.vue";
export default {
  components: {
    NavigationTitle,
    /* CircleButton,  */ AppButton,
    SoftwaresTable,
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
