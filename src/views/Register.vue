<template>
  <div class="register">
    <h1>REGISTER PAGE</h1>

    <form class="login" @submit.prevent="Register">
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
      <input type="submit" value="Register" />
    </form>
    <div>
      Have Account <router-link to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import firebase from 'firebase/compat/app';
require('firebase/compat/auth');

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Register = ()=> {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(user => alert("You are Successfully Logged in"))
        .catch(err => alert(err.message))
    }

    return{
      Register,
      email,
      password,
    }
  },
}
</script>
