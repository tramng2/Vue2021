<template>
  <section class="my-5 text-center">
    <button @click="handleLoginGoogle" class="border rounded p-2">
      Login with Google
    </button>
  </section>
</template>

<script>
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export default {
  methods: {
    handleLoginGoogle() {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account",
      });
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then(() => {
          this.$emit("close-login-modal-from_google");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  emits: ["close-login-modal-from_google"],
};
</script>

<style></style>
