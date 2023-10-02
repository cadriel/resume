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

    <div class="flex items-center font-light mb-1" v-if="linkedin">
      <span class="i-mdi-linkedin mr-2"></span>
      <a :href="linkedinLink" target="_blank">{{ linkedin }}</a>
    </div>

    <div class="flex items-center font-light mb-1" v-if="location">
      <span class="i-mdi-map-marker mr-2"></span>
      {{ location }}
    </div>
  </Section>
</template>

<script setup lang="ts">
const email = defineModel('email', { required: false })
const github = defineModel('github', { required: false })
const linkedin = defineModel('linkedin', { required: false })
const location = defineModel('location', { required: false })

const mailtoLink = computed(() => {
  if (!email.value) return ''
  return `mailto: ${email.value}`
})

const githubLink = computed(() => {
  if (!github.value) return ''
  return `https://${github.value}`
})

const linkedinLink = computed(() => {
  if (!github.value) return ''
  return `https://${linkedin.value}`
})

</script>
