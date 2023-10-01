<template>
  <ColorScheme placeholder="..." tag="span" class="text-neutral-300 dark:text-neutral-700">
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
    @apply border border-neutral-300 dark:border-neutral-700 inline-flex items-center rounded-full cursor-pointer;
  }

  .btn-toggle {
    @apply px-2 py-1 text-neutral-300 dark:text-neutral-700;
  }

  .btn-toggle.active {
    @apply text-neutral-700 dark:text-neutral-300;
  }
</style>
