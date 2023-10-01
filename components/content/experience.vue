<template>
  <div class="flex w-full items-stretch mb-10">
    <div class="flex-shrink bg-base-300 place-items-start pr-6">
      <div class="text-lg">{{ company }}</div>
      <a v-if="websiteLink" :href="websiteLink" target="_blank">{{ website }}</a>
      <div>{{ dates }}</div>
    </div>
    
    <div class="flex-shrink basis-px divider divider-horizontal"><div class="dot"></div></div>
    
    <div class="flex-grow basis-3/5 bg-base-300 place-items-start pl-6">
      <h3 class="text-lg font-medium mb-3">{{ jobTitle }}</h3>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const company = defineModel('company', { required: true })
const website = defineModel('website', { type: String, required: false })
const dates = defineModel('dates', { required: false })
const jobTitle = defineModel('jobTitle', { required: true })

const websiteLink = computed(() => {
  if (!website.value) return ''
  return website.value
})
</script>

<style scoped lang="postcss">
  .divider.divider-horizontal {
    @apply bg-gray-300 dark:bg-gray-700;
    min-height: 10px;
    width: 1px;
  }

  .dot {
    @apply bg-gray-300 dark:bg-gray-700;
    position: absolute;
    margin-top: 10px;
    margin-left: -5px;
    height: 10px;
    width: 10px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }
</style>
