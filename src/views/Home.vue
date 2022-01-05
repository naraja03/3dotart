<template>
  <div class="home">
    <h1>Welcome, {{ name }}</h1>
	<router-link to="/about">ABOUT</router-link> <br>
	<button @click="Logout">LOGOUT</button>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import firebase from 'firebase/compat/app';
require('firebase/compat/auth')

export default {
	setup() {
		const name = ref("");

		onBeforeMount(()=>{
			const user = firebase.auth().currentUser;
			if(user){
				name.value = user.email.split('@')[0];
				console.log(name.value);
			}
		})

		const Logout = ()=> {
			console.log(firebase.auth().currentUser);
			firebase
				.auth()
				.signOut()
				.then(console.log("You Are Successfully LoggedOut"))
				.catch(err => alert(err.message))
		}

		return{
			name,
			Logout,
		}
	},
}
</script>
