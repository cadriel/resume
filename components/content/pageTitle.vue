<template>
  <div class="mb-10">
    <h1 class="text-5xl mb-4 text-neutral-200">
      {{ firstname }}
      <span class="font-thin text-neutral-300">{{ lastname }}</span>
    </h1>
    <p class="text-sm font-light text-neutral-300 uppercase">{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
  const firstname = defineModel('firstname', { required: true })
  const lastname = defineModel('lastname', { required: true })
  const title = defineModel('title', { required: true })
</script>