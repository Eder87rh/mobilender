<template>
  <div id="app">
    <Header />
    <Breadcrumb />
    <router-view />
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
