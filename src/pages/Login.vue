<template>
  <div class="login">
    <Loader v-if="loading" />
    <div v-else class="login__container">
      <form action="" class="login__form" @submit.prevent="onSubmit">
        <div class="control-group">
          <label class="control-group__label">email</label>
          <input class="control-group__input" type="text" v-model="email" />
        </div>
        <div class="control-group">
          <label class="control-group__label">Password</label>
          <input
            class="control-group__input"
            type="password"
            v-model="password"
          />
        </div>
        <error-alert v-if="error">
          {{ error }}
        </error-alert>
        <app-button>
          <p>
            Iniciar Sesión
          </p>
        </app-button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import AppButton from "../components/AppButton.vue";
import ErrorAlert from "../components/ErrorAlert.vue";
import axiosClient from "@/axiosClient";
import Loader from "../components/Loader.vue";
export default {
  components: { AppButton, ErrorAlert, Loader },
  setup() {
    const email = ref("");
    const password = ref("");
    let error = ref("");
    let loading = ref(false);

    const router = useRouter();

    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    // eslint-disable-next-line no-unused-vars
    function validateFields() {
      if (!email.value || !password.value) {
        console.log("Favor de completar todos los campos");
        error.value = "Favor de completar todos los campos";
        return false;
      }

      if (!validateEmail(email.value)) {
        console.log("Email inválido");
        error.value = "Email inválido";
        return false;
      }

      error.value = "";
      return true;
    }

    const onSubmit = async () => {
      if (!validateFields()) {
        return;
      }
      try {
        loading.value = true;
        const res = await axiosClient.post("/api/login", {
          email: email.value,
          password: password.value,
        });

        localStorage.setItem("mobilenderToken", res.data.token);
        router.push({ name: "Home" });
        loading.value = false;
      } catch (err) {
        console.log("🚀 ~ file: Login.vue ~ line 88 ~ onSubmit ~ err", err);
        error.value = err.response.data.error;
        loading.value = false;
      }
    };

    return {
      onSubmit,
      email,
      password,
      error,
      loading,
    };
  },
};
</script>

<style lang="css" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 80rem;
}

.login__container {
  /* border: 2px solid var(--accent-color); */
  background-color: var(--secondary-color);
  border-radius: 0.8rem;
  padding: 6rem;
  width: 35rem;
}

.login__form {
  display: flex;
  flex-direction: column;
}
.control-group {
  display: flex;
  flex-direction: column;
}
.control-group {
  margin-bottom: 2rem;
}

.control-group__label {
  font-size: 1.3rem;
  text-transform: uppercase;
  color: var(--white-color);
  /* text-align: center; */
}

.control-group__input {
  background-color: none;
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: 0.2rem;
  font-family: inherit;
  font-size: inherit;
  color: var(--grey-color);
  background-color: var(--grey-light-color);
  margin-top: 0.5rem;
}

.control-group__input:focus {
  background: white;
}
</style>
