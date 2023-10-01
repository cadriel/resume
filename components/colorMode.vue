<template>
  <ColorScheme placeholder="..." tag="span" class="text-gray-300 dark:text-gray-700">
  <label for="btn-toggle" class="btn-toggle-group" @click="toggleColorMode">
    <span class="btn-toggle rounded-l-full" :class="{ 'active': $colorMode.value === 'light' }">
      <span class="flex i-mdi-white-balance-sunny" />
    </span>
    <span class="btn-toggle rounded-r-full" :class="{ 'active': $colorMode.value === 'dark' }">
      <span class="flex i-mdi-moon-waning-crescent" />
    </span>
  </label>
  </ColorScheme>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

function toggleColorMode() {
  if (colorMode.preference === 'light') {
    colorMode.preference = 'dark'
  } else {
    colorMode.preference = 'light'
  }
}
</script>

<style scoped lang="postcss">
  .btn-toggle-group {
    @apply border border-gray-300 dark:border-gray-700 inline-flex items-center rounded-full cursor-pointer;
  }

  .btn-toggle {
    @apply px-2 py-1 text-gray-300 dark:text-gray-700;
  }

  .btn-toggle.active {
    @apply text-gray-700 dark:text-gray-300;
  }
</style>
