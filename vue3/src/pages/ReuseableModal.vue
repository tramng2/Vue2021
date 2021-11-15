<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Reuseabe Modal</h1>
      <Modal v-if="isModalOpen" @close-login-modal="isModalOpen = false">
        <template v-slot:title>This is title</template>
        <template v-slot:desc
          >This is desc This is description This is description This is
          description This is description
        </template>
        <template v-slot:label> Email</template>
      </Modal>
      <button
        class="border rounded p-2 bg-pink-700 text-white"
        @click="isModalOpen = true"
      >
        Open modal
      </button>
    </div>
  </section>
</template>

<script>
import Modal from "../components/Modal";
import { ref } from "vue";
export default {
  setup() {
    let isModalOpen = ref(false);
    return { isModalOpen };
  },
  components: { Modal },
};
</script>

<style></style>
