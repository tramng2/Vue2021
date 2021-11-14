<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-2xl text-center">Hero count {{ heroCount }}</h1>
      <p>Hello {{ fullname }}</p>
      <ul>
        <li
          class="flex justify-between"
          v-for="(hero, index) in heros"
          :key="index"
        >
          {{ hero }}
          <button @click="handleRemove(hero)">x</button>
        </li>
      </ul>
      <form @submit.prevent="handleAdd" class="mt-10">
        <input
          v-model="input"
          placeholder="type"
          class="border rounded"
          ref="newInputRef"
        />
        <button type="submit">add</button>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
export default {
  name: "HerosApp",
  setup() {
    const newInputRef = ref("");
    const input = ref("");
    const heros = ref(["superman", "ironman", "captain"]);

    function handleRemove(item) {
      heros.value = heros.value.filter((el) => el !== item);
    }

    function handleAdd() {
      if (input.value) {
        heros.value.push(input.value);
        input.value = "";
      }
    }

    const heroCount = computed({
      get: () => heros.value.length,
    });

    onMounted(() => {
      newInputRef.value.focus();
    });

    return { heros, input, handleRemove, handleAdd, newInputRef, heroCount };
  },
  data() {
    return {
      fname: "tram",
      lname: "nguyen",
    };
  },

  computed: {
    fullname: {
      get() {
        return `${this.fname} ${this.lname}`;
      },
      set(fullname) {
        return fullname;
      },
    },
  },
};
</script>
