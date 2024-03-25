<template>
  <a
    :href="link"
    target="_blank"
    :title="title"
  >
    <Icon
      :icon="icon"
      class="text-p_text rounded-md hover:bg-border_sm p-2 transition-all"
      width="50"
    />
  </a>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps(['link', 'title', 'icon']);
</script>