<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-2">Real time chat box</h1>
      <div class="border rounder-lg">
        <div class="h-64 p-2">
          <div
            v-for="chat in state.chats"
            :key="chat"
            :class="chat.userId === state.userId ? 'text-right' : ''"
          >
            {{ chat.mess }}
          </div>
        </div>
        <div class="h-8 p-2">
          <input
            v-model="state.message"
            placeholder="Start typing"
            class="p-1 border rounder shadow"
            @keydown.enter="writeData"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  getDatabase,
  ref,
  get,
  child,
  onValue,
  set,
  push,
} from "firebase/database";

import { onMounted, reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      chats: {},
      message: "",
    });

    onMounted(async () => {
      const db = getDatabase();
      const dbRef = ref(db);

      get(child(dbRef, `chats`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            state.chats = snapshot.val();
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      const collection = ref(db, "chats");
      onValue(collection, async (snapshot) => {
        const data = snapshot.val();
        state.chats = data;
      });
    });

    function writeData() {
      const db = getDatabase();

      const chatsListRef = ref(db, "chats");
      const newPostRef = push(chatsListRef);
      set(newPostRef, {
        userId: state.userId,
        mess: state.message,
      });
    }

    return { state, writeData };
  },
};
</script>

<style></style>
