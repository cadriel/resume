<template>
  <div class="w-fixed w-full max-h-full flex-shrink flex-grow-0 px-4 bg-gray-200 dark:bg-gray-900">
    <div class="sticky top-0 p-4 w-full h-full text-sm">

      <ContentDoc path="/left-content" />

      <hr />

      <div class="text-xs text-gray-400 dark:text-gray-500">
        This app is written in Nuxt, with Tailwind.
        It's deployed using Github Actions.
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
//
</script>