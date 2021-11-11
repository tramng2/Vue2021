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
        <input v-model="input" placeholder="type" class="border rounded" />
        <button type="submit">add</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "HerosApp",
  data() {
    return {
      input: "",
      fname: "tram",
      lname: "nguyen",
      heros: ["superman", "ironman", "captain"],
    };
  },
  methods: {
    handleAdd() {
      if (this.input) {
        this.heros.push(this.input);
        this.input = "";
      }
    },
    handleRemove(item) {
      this.heros = this.heros.filter((el) => el !== item);
    },
  },
  computed: {
    heroCount() {
      return this.heros.length;
    },
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
