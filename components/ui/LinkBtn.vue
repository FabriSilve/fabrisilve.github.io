<template>
  <a
    class="border-b-2 border-link_border hover:border-link_border_hover hover:text-link_text_hover transition-colors text-link"
    :href="link"
    target="_blank"
  >
    {{text}}
  </a>
</template>
<script setup lang="ts">
defineProps(["text", "link"]);
</script>