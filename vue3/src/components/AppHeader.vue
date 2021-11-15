<template>
  <nav
    class="
      w-full
      bg-gradient-to-r
      from-blue-800
      to-blue-600
      text-white
      px-4
      py-2
    "
  >
    <router-link class="mx-2" to="/">Home</router-link>
    <router-link class="mx-2" to="/calendar">Calendar</router-link>
    <router-link class="mx-2" to="/hero">About</router-link>
    <router-link class="mx-2" to="/markdown">Markdown</router-link>
    <router-link class="mx-2" to="/slider">Slider</router-link>
    <router-link class="mx-2" to="/calculator">Calculator</router-link>
    <router-link class="mx-2" to="/modal">Modal</router-link>
    <router-link class="mx-2" to="/chat">Chatbox</router-link>
    <button v-if="!isLoggedIn" @click="$emit('open-login-modal')" class="mx-2">
      Login
    </button>
    <button v-else @click="logout" class="mx-2">Logout</button>
  </nav>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  name: "AppHeader",
  emits: ["open-login-modal"],
  props: { isLoggedIn: { type: Boolean, required: true } },
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("user sign out");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
