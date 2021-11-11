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
    <router-link class="mx-2" to="/"> Home</router-link>
    <router-link class="mx-2" to="/calendar">Calendar</router-link>
    <router-link class="mx-2" to="/hero"> About</router-link>
    <router-link class="mx-2" to="/markdown"> Markdown</router-link>
    <router-link class="mx-2" to="/slider"> Slider Carousel</router-link>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style></style>
