<template>
  <div class="mb-10">
    <h2 class="mb-4 pb-1 font-light uppercase" :class="headingClass">
      {{ title }}
    </h2>

    <div class="font-light" :class="contentClass">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

const title = defineModel('title', { required: true })
const contentClass = defineModel('contentClass', { required: false, type: String })
const attrs = useAttrs()

const headingClass = computed(() => {
  const borderClasses = 'border-b border-neutral-300 dark:border-neutral-700'
  if (attrs.class) return attrs.class
  return `${borderClasses} text-2xl`
})
</script>
