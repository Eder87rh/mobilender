<template>
  <nav id="breadcrumb">
    <!-- <router-link exact to="/">Home</router-link>/
    <router-link exact to="/listado_software">Listado de Software</router-link> -->
    <ul>
      <li
        v-for="(breadcrumb, index) in breadcrumbList"
        :key="index"
        :class="{ linked: !!breadcrumb.link }"
        @click="routeTo(index)"
      >
        {{ breadcrumb.name + "  /" }}
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const breadcrumbList = ref([]);
    const route = useRoute();
    const router = useRouter();
    console.log("🚀 ~ file: Breadcrumb.vue ~ line 24 ~ setup ~ route", route);
    console.log(
      "🚀 ~ file: Breadcrumb.vue ~ line 27 ~ setup ~ route.meta.breadcrumb ",
      route.meta.breadcrumb
    );

    const updateList = () => (breadcrumbList.value = route.meta.breadcrumb);

    const routeTo = (index) => {
      if (breadcrumbList.value[index].link) {
        router.push(breadcrumbList.value[index].link);
      }
    };

    onMounted(() => {
      updateList();
    });

    watch(route, () => {
      updateList();
    });

    return {
      breadcrumbList,
      routeTo,
    };
  },
};
</script>

<style lang="css" scoped>
#breadcrumb {
  margin: 3rem auto;
  margin-top: 10rem;
  width: 80%;
  font-size: 1.2rem;
}

/* li {
  font-display: inherit;
  color: var(--grey-light-color);
  text-decoration: none;
} */

ul {
  text-decoration: none;
  color: var(--grey-color);
  margin: 1rem;
  list-style-type: none;
  display: flex;
}

li {
  color: var(--grey-color);
  text-decoration: none;
  margin-left: 1rem;
  cursor: pointer;
}

.linked {
  color: var(--grey-light-color);
  text-decoration: underline;
}

/* nav li:hover, */
/* nav .router-link-active,
nav .router-link-exact-active {
  text-decoration: none;
  color: var(--grey-color);
  cursor: pointer;
  margin: 1rem;
} */
</style>
