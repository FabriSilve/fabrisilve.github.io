<template>
  <SectionParagraph>
    <Icon icon="ci:dot-02-s" class="inline"/>
    <slot />
  </SectionParagraph>
</template>
<script setup lang="ts">
import {Icon} from "@iconify/vue";
</script>