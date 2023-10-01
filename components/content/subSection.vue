<template>
  <div class="mb-8">
    <h3 class="mb-4 font-bold text-neutral-500">
      {{ title }}
    </h3>

    <slot />
  </div>
</template>

<script setup lang="ts">
const title = defineModel('title', { required: true })
</script>