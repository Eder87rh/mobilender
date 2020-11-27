<template>
  <div class="user-settings">
    <div class="user-settings__name">
      {{ firstName + " " + lastName }}
    </div>
    <user-avatar :firstName="firstName" :lastName="lastName" />
    <div class="user-settings__settings">
      <i class="fas fa-chevron-down" style="color:grey"></i>
    </div>
    <div class="user-settings__options">
      <ul>
        <li @click="signOut">Cerrar Sesión</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import userAvatar from "./userAvatar.vue";
export default {
  components: { userAvatar },
  props: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  setup() {
    const router = useRouter();

    function signOut() {
      localStorage.setItem("mobilenderToken", "");
      router.push({ name: "Login" });
    }

    return {
      signOut,
    };
  },
};
</script>

<style lang="css" scoped>
.user-settings {
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;
  padding: 1rem;
  position: relative;
  width: 20rem;
}

.user-settings:hover {
  background-color: var(--primary-color);
}

.user-settings:hover .user-settings__options {
  transition: all 0.5s ease;
  transform: translateY(6rem);
  opacity: 100%;
}

.user-settings__options {
  opacity: 0%;
  background-color: var(--secondary-color);
  position: absolute;
  left: 0rem;
  width: 20rem;
}

.user-settings__options > ul {
  text-decoration: none;
  list-style-type: none;
}

.user-settings__options > ul > li {
  padding: 2rem;
}
</style>
