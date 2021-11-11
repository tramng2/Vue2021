<template>
  <div class="flex flex-wrap w-full relative">
    <div class="absolute w-full" v-for="(color, index) in colors" :key="color">
      <transition name="fade">
        <div
          v-if="curPage == index"
          class="w-full"
          :class="color"
          style="height: 500px"
        ></div>
      </transition>
    </div>
    <div class="w-full" style="height: 340px">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
          v-for="(color, index) in colors"
          :key="color"
          @click="makeActive(index)"
          :class="curPage == index ? 'bg-gray-700' : 'bg-gray-300'"
          class="w-4 h-4 mx-2 rounded-full cursor-pointer shadow-md"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curPage: 0,
      handleInteval: "",
      colors: ["bg-yellow-500", "bg-blue-500", "bg-red-500"],
    };
  },
  mounted() {
    // this.handleInteval = setInterval(() => {
    //   this.curPage == 2 ? (this.curPage = 0) : this.curPage++;
    // }, 2000);
  },
  unmounted() {
    clearInterval(this.handleInteval);
  },
  methods: {
    makeActive(index) {
      this.curPage = index;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
