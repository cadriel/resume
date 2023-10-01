<template>
  <!-- Contact Information -->
  <Section title="Contact" class="text-xl">
    <div class="flex items-center font-light mb-1" v-if="email">
      <span class="i-mdi-email-fast mr-2"></span>
      <a :href="mailtoLink">{{ email }}</a>
    </div>

    <div class="flex items-center font-light mb-1" v-if="github">
      <span class="i-mdi-github mr-2"></span>
      <a :href="githubLink" target="_blank">{{ github }}</a>
    </div>

    <p class="text-xs font-light dark:font-thin" v-if="location">{{ location }}</p>
  </Section>
</template>

<script setup lang="ts">
const email = defineModel('email', { required: false })
const github = defineModel('github', { required: false })
const location = defineModel('location', { required: false })

const mailtoLink = computed(() => {
  if (!email.value) return ''
  return `mailto: ${email.value}`
})

const githubLink = computed(() => {
  if (!github.value) return ''
  return `https://${github.value}`
})

</script>
