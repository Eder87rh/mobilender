<template>
  <div id="app">
    <Header />
    <Breadcrumb />

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import "./globalStyles.css";
export default {
  name: "App",
  components: {
    Header,
    Breadcrumb,
  },
};
</script>

<style lang="css" scoped>
.content {
  margin: 0 auto;
  width: 80%;
  min-height: 100rem;
  font-size: 1.3rem;
  /* background-color: var(--secondary-color); */
}
</style>
