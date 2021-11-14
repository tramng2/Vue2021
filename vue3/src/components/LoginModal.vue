<template>
  <section
    @click="handleClose"
    class="h-screen w-screen bg-gray-400 top-0 opacity-50 z-20 fixed"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-10/12 md:w-1/3">
        <div class="border p-2">
          <h1 class="text-2xl text-center">Login</h1>
          <LoginWGoogle @close-login-modal-from_google="handleClose" />
          <form @submit.prevent="handleLogin">
            <div class="my-4">
              <label>Email</label>
              <input
                v-model="email"
                class="w-full border rounded p-2"
                placeholder="enter your email or usename"
                ref="emailInput"
              />
            </div>
            <div class="my-4">
              <label>Password</label>
              <input
                v-model="password"
                class="w-full border rounded p-2"
                placeholder="enter your password"
              />
            </div>
            <div class="my-4">
              <button
                type="submit"
                class="
                  w-full
                  rounded
                  shadow-md
                  text-center
                  bg-gradient-to-r
                  from-red-800
                  to-pink-800
                  text-white
                  p-2
                "
              >
                <span v-if="isLoading" class="text-2xl text-center"
                  >Loading...</span
                >
                <span v-else class="text-2xl text-center">Login</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LoginWGoogle from "../components/Login/LoginWGoogle.vue";

export default {
  data() {
    return {
      email: "user1@testing.com",
      password: "123456",
      isLoading: false,
    };
  },
  components: { LoginWGoogle },
  mounted() {
    this.$refs.emailInput.focus();
  },
  methods: {
    handleLogin() {
      this.isLoading = true;
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.email = "";
          this.password = "";
          this.isLoading = false;
          this.handleClose();
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
        });
    },
    handleClose() {
      this.$emit("close-login-modal");
    },
  },
  emits: ["close-login-modal"],
};
</script>

<style></style>
