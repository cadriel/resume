<template>
  <div class="mb-10">
    <h1 class="text-5xl mb-4 ">
      {{ firstname }}
      <span class="font-thin text-gray-500">{{ lastname }}</span>
    </h1>
    <p class="text-sm font-light dark:font-thin uppercase">{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
  const firstname = defineModel('firstname', { required: true })
  const lastname = defineModel('lastname', { required: true })
  const title = defineModel('title', { required: true })
</script>