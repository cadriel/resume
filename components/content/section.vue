<template>
  <div class="mb-10">
    <h2 class="font-serif mb-4 pb-1 font-thin uppercase" :class="headingClass">
      {{ title }}
    </h2>

    <div class="font-light">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

const title = defineModel('title', { required: true })
const attrs = useAttrs()

const headingClass = computed(() => {
  const borderClasses = 'border-b border-gray-300 dark:border-gray-700'
  if (attrs.class) return attrs.class
  return `${borderClasses} text-2xl`
})
</script>