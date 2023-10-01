<template>
  <div class="w-full flex min-h-screen flex-col sm:flex-row flex-wrap sm:flex-nowrap flex-grow">
    <Left />
    <Main />
  </div>
</template>

<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-200 dark:bg-gray-950 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-400;
  &:hover {
    @apply bg-gray-300;
  }
}

@media (min-width: 640px) {
  .w-fixed {
    flex: 0 1 280px;
    min-width: 280px;
  }
}
</style>