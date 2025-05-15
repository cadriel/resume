<template>
  <!-- Contact Information -->
  <Section title="Contact" :h2alt=true>
    <div class="flex items-center font-light mb-1" v-if="email">
      <span class="print-icon i-mdi-email-fast mr-2"></span>
      <a :href="mailtoLink">{{ email }}</a>
    </div>

    <div class="flex items-center font-light mb-1" v-if="github">
      <span class="print-icon i-mdi-github mr-2"></span>
      <a :href="githubLink" target="_blank">{{ github }}</a>
    </div>

    <div class="flex items-center font-light mb-1" v-if="github2">
      <span class="print-icon i-mdi-github mr-2"></span>
      <a :href="github2Link" target="_blank">{{ github2 }}</a>
    </div>

    <div class="flex items-center font-light mb-1" v-if="linkedin">
      <span class="print-icon i-mdi-linkedin mr-2"></span>
      <a :href="linkedinLink" target="_blank">{{ linkedin }}</a>
    </div>

    <div class="flex items-center font-light mb-1" v-if="location">
      <span class="print-icon i-mdi-map-marker mr-2"></span>
      {{ location }}
    </div>
  </Section>
</template>

<script setup lang="ts">
const email = defineModel('email', { required: false })
const github = defineModel('github', { required: false })
const github2 = defineModel('github2', { required: false })
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

const github2Link = computed(() => {
  if (!github.value) return ''
  return `https://${github2.value}`
})

const linkedinLink = computed(() => {
  if (!github.value) return ''
  return `https://${linkedin.value}`
})

</script>

<style scoped lang="postcss">

  @media print {
    .print-icon {
      print-color-adjust: exact;
    }
  }
</style>

