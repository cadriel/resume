<template>
  <div class="left-section">
    <div class="sticky top-0 p-4 w-full h-full text-sm text-neutral-200">

      <ContentDoc path="/left-content" />

      <hr />

      <div class="text-xs text-neutral-500">
        This app is written in Nuxt, with Tailwind.
        It's deployed using Github Actions.
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
//
</script>

<style lang="postcss" scoped>
@media (min-width: 640px) {
  .w-fixed {
    flex: 0 1 280px;
    min-width: 280px;
  }
}

.left-section {
  @apply w-fixed w-full max-h-full flex-shrink flex-grow-0 px-4 bg-neutral-800 dark:bg-stone-700 rounded-l-md
}
</style>