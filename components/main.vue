<template>
  <main role="main" class="main-section">
    <div class="flex w-full justify-end items-center py-3">
      <ColorMode />

      <div class="flex-shrink basis-px divider divider-horizontal ml-3 mr-2"></div>

      <BtnSocial icon="i-mdi-github" @click="handleSocial" />
    </div>

    <ContentDoc path="/main-content" />
    
  </main>
</template>

<script setup lang="ts">
function handleSocial() {
  window.open(
  'https://github.com/cadriel/resume',
  '_blank' // <- This is what makes it open in a new window.
  )
}
</script>

<style lang="postcss" scoped>
.main-section {
  @apply w-full flex-grow px-10
}

@media print {
  .main-section {
    @apply bg-neutral-50 text-neutral-950 w-auto flex-none block p-0;
    page-break-before: always;
  }
}
</style>
