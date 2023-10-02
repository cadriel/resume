<template>
  <button
    type="button"
    class="btn-social noprint">
    <div class="flex text-2xl" :class="icon"></div>
  </button>
</template>

<script setup lang="ts">
const icon = defineModel('icon', { required: true })
</script>

<style scoped lang="postcss">
  .btn-social {
    @apply rounded-full leading-none p-1 text-gray-700 hover:bg-gray-200 dark:text-gray-200 hover:dark:bg-gray-700;
  }
</style>