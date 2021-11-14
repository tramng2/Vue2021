<template>
  <AppHeader @open-login-modal="isLoginOpen = true" :isLoggedIn="isLogined" />
  <router-view></router-view>
  <LoginModal v-if="isLoginOpen" @close-login-modal="isLoginOpen = false" />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import LoginModal from "./components/LoginModal.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "App",
  data() {
    return {
      isLoginOpen: false,
      isLogined: false,
      authUser: {},
    };
  },
  mounted() {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLogined = true;
        this.authUser = user;
      } else {
        this.isLogined = false;
        this.authUser = {};
        console.log("no username or password ");
      }
    });
    return unsubscribe;
  },
  components: { AppHeader, LoginModal },
};
</script>
