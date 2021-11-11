<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      v-show="isHomePage"
      :text="isShow ? 'Close' : 'Add task'"
      :color="isShow ? 'red' : 'green'"
      @toggle-is-show="$emit('toggle-is-show')"
    />
  </header>
</template>
<script>
import Button from "./Button.vue";
export default {
  name: "Header",
  props: {
    title: String,
    isShow: Boolean,
  },
  components: {
    Button,
  },
  emits: ["toggle-is-show"],
  computed: {
    isHomePage() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
