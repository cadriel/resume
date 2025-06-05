<template>
  <div class="left-section text-neutral-200">
    <div class="left-section-sticky">

      <div class="profile-pic">
        <img src="~/assets/img/portrait_250x250.jpeg" />
      </div>

      <ContentDoc path="/left-content" />

      <hr class="noprint" />

      <div class="noprint text-xs text-neutral-500">
        <p>Engineered with Nuxt and Vue3, with Tailwind CSS.</p>
        <p>Content written in Markdown with support of the Nuxt Content Module.</p>
        <p>Magically deployed on github pages using automated actions.</p>
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

.left-section-sticky {
  @apply sticky top-0 p-4 w-full h-full text-sm
}

.profile-pic { 
    @apply flex border border-neutral-200;
    margin-bottom: 4px;
    width: 125px;
    height: 125px;
    border-radius: 100%; 
    overflow: hidden; 
    align-items: center; 
    justify-content: center; 
} 

.profile-pic img { 
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
}

@media print {
  .profile-pic {
    @apply block absolute right-0;
  }

  .left-section {
    @apply bg-neutral-50 text-neutral-950 p-0 w-auto flex-none block;
  }

  .left-section-sticky {
    @apply static p-0 text-base;
  }
}
</style>
