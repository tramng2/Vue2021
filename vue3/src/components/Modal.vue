<template>
  <section
    @click="$emit('close-login-modal')"
    class="h-screen w-screen bg-gray-400 top-0 left-0 opacity-50 z-20 fixed"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-10/12 md:w-1/3">
        <div class="border p-2">
          <h1 class="text-2xl">
            <slot name="title"></slot>
          </h1>
          <p class="my-3">
            <slot name="desc"></slot>
          </p>
          <label class="mr-2"><slot name="label"></slot></label>
          <input class="border rounded" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close-login-modal"],
};
</script>

<style></style>
