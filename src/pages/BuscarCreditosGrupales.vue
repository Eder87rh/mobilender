<template>
  <div>
    <NavigationTitle>
      Buscar créditos grupales

      <template #action-button>
        <AppButton :action="() => $router.push({ name: 'Inspeccionar' })">
          <template #icon>
            <i class="fas fa-search"></i>
          </template>
          Inspeccionar
        </AppButton>
      </template>
    </NavigationTitle>
    <div v-if="error">
      {{ error }}
    </div>
    <Suspense>
      <template #default>
        <creditos-grupales-table />
      </template>
      <template #fallback>
        <loader />
      </template>
    </Suspense>
  </div>
</template>

<script>
import { ref, onErrorCaptured } from "vue";
import AppButton from "../components/AppButton.vue";
import NavigationTitle from "../components/NavigationTitle.vue";
import Loader from "../components/Loader.vue";
import CreditosGrupalesTable from "../components/tables/CreditosGrupalesTable/CreditosGrupalesTable.vue";
export default {
  components: {
    NavigationTitle,
    AppButton,
    CreditosGrupalesTable,
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

<style lang="scss" scoped></style>
