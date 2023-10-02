<template>
  <div>
    <h3>
      {{ title }}
    </h3>

    <slot />
  </div>
</template>

<script setup lang="ts">
const title = defineModel('title', { required: true })
</script>

<style scoped lang="postcss">
  div {
    @apply mb-8;
  }

  h3 {
    @apply mb-4 font-bold text-neutral-500;
  }

  @media print {
    div {
      @apply mb-4;
    }

    h3 {
      @apply mb-1 text-neutral-950;
    }
  }
</style>