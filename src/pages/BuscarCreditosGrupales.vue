<template>
  <div>
    <NavigationTitle>
      Buscar créditos grupales

      <template #action-button>
        <AppButton>
          <template #icon>
            <i class="fas fa-plus"></i>
          </template>
          Inspeccionar
        </AppButton>
      </template>
    </NavigationTitle>
  </div>
</template>

<script>
import AppButton from "../components/AppButton.vue";
// import CircleButton from "../components/CircleButton.vue";
import NavigationTitle from "../components/NavigationTitle.vue";
export default {
  components: {
    NavigationTitle,
    AppButton,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
