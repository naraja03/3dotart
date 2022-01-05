<template>
  <div class="login">
    <h1 >LOGIN PAGE</h1>

    <form class="loginForm" @submit.prevent="Login">
      <input
        type="text"
        name="email"
        id="email"
        autocomplete="off"
        placeholder="Mail"
        v-model="email"
      />
      <br />
      <input
        type="password"
        name="email"
        id="pass"
        autocomplete="off"
        placeholder="PassWord"
        v-model="password"
      />
      <br />
      <input type="submit" value="Login" />
    </form>
    <div>Need Account <router-link to="/register">Register</router-link></div>
  </div>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase/compat/app";
require("firebase/compat/auth");

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => alert(data))
        .catch((err) => alert(err.message));
    };

    return {
      Login,
      email,
      password,
    };
  },
};
</script>
<style scoped>
.login{
  display: flex;
  height: 657px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: blueviolet;
}


</style>
