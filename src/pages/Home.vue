<template>
  <div class="home-container">
    <home-card url="/listado_software">
      Listado de softwares
    </home-card>
    <home-card url="/buscar_creditos_grupales">
      Buscar créditos grupales
    </home-card>
  </div>
</template>

<script>
import HomeCard from "../components/HomeCard.vue";
export default {
  components: { HomeCard },
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.home-container {
  display: flex;
  /* justify-content: center; */
}
</style>
