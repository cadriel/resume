<template>
  <div>
    <tag v-for="tag in tagsFormatted" class="mr-1 mb-1">{{ tag }}</tag>
  </div>
</template>

<script setup lang="ts">
const tags = defineModel('tags', { required: true, type: String })

const tagsFormatted = computed(() => {
  if (!tags.value) return []
  return tags.value.split(',').map((tag: string) => tag.trim())
})
</script>