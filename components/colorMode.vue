<template>
  <select
    v-model="colorMode.preference"
    class="border w-24 h-8 dark:bg-gray-900 dark:border-gray-700"
  >
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>