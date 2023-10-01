<template>
  <!-- <div class="text-gray-700 dark:text-gray-300 font-sans min-h-screen container"> -->
  <div class="container rounded-md font-sans min-h-screen bg-stone-100 dark:bg-stone-800">
     <div class="card">
      <Left />
      <Main />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@media (min-width: 640px) {
  .w-fixed {
    flex: 0 1 280px;
    min-width: 280px;
  }
}

.card {
  @apply w-full my-10 flex min-h-screen flex-col sm:flex-row flex-wrap sm:flex-nowrap flex-grow
}
</style>