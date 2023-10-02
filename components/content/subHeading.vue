<template>
  <h4 class="mb-1 text-sm font-medium">
    {{ title }}
  </h4>
</template>

<script setup lang="ts">
const title = defineModel('title', { required: true })
</script>