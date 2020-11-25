<template>
  <nav id="nav">
    <router-link exact to="/">Home</router-link>/
    <router-link exact to="/listado_software">Listado de Software</router-link>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
#nav {
  margin: 3rem auto;
  margin-top: 10rem;
  width: 80%;
  font-size: 1.2rem;
}

a {
  /* text-decoration: none; */
  font-display: inherit;
  color: var(--grey-light-color);
}

/* nav li:hover, */
nav .router-link-active,
nav .router-link-exact-active {
  text-decoration: none;
  color: var(--grey-color);
  cursor: pointer;
  margin: 1rem;
}
</style>
