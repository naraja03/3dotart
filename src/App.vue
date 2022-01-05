<template>
  <div class="bg">
    <router-view />
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import firebase from "firebase/compat/app/";
require("firebase/compat/auth/");
import { onBeforeMount } from "vue";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace("/login");
        } else if (route.path === "/login" || route.path === "/register") {
          router.replace("/");
        }
      });
    });
  },
};
</script>

<style>
body{
  padding: 0px;
  margin: 0px;
}

</style>
