<template>
  <NuxtLink :to="to">
  <span
      class="border-b-2 border-link_border hover:border-link_border_hover hover:text-link_text_hover transition-colors text-link">
    <slot/>
  </span>
  </NuxtLink>
</template>
<script setup>
defineProps({
  to: String
})
</script>