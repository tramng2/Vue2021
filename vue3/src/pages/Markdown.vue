<template>
  <div class="flex flex-wrap w-full">
    <h1 class="w-full text-center text-3xl m-10">Markdown</h1>
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border">
        <textarea
          class="w-full h-full"
          :value="input"
          @input="update"
          ref="textArea"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="markText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import debounce from "../utilities/mixins/debounce";
export default {
  name: "Markdown",
  mixins: [debounce],
  data() {
    return {
      input: "",
    };
  },
  mounted() {
    this.$refs.textArea.focus();
  },
  methods: {
    update(e) {
      const task = () => {
        this.input = e.target.value;
      };
      this.debounce(task, 500);
    },
  },
  computed: {
    markText() {
      return marked(this.input);
    },
  },
};
</script>

<style></style>
