<template>
  <div class="mb-10">
    <h1>
      {{ firstname }}
      <span>{{ lastname }}</span>
    </h1>
    <p>{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
  const firstname = defineModel('firstname', { required: true })
  const lastname = defineModel('lastname', { required: true })
  const title = defineModel('title', { required: true })
</script>

<style scoped lang="postcss">
  h1 {
    @apply text-5xl mb-4 text-neutral-200;
  }

  h1 span {
    @apply font-thin text-neutral-300;
  }

  p {
    @apply text-sm font-light text-neutral-300 uppercase;
  }

  @media print {
    h1 {
      @apply text-neutral-950;
    }
  
    h1 span {
      @apply text-neutral-950;
    }
  
    p {
      @apply text-neutral-950;
    }
  }
</style>