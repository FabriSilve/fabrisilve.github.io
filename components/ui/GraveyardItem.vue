<template>
  <div
    class="flex flex-col gap-1"
    :key="key"
  >
    <a
      :href="link"
      target="_blank"
      class="font-theme_bold text-head_text text-md"
    >
      {{name}}
      <Icon
        class="inline text-xl mx-2"
        color="#eaeaea"
        icon="ep:top-right"
      />
    </a>
    <p
      class="font-theme text-sm lg:text-lg"
    >
      {{description}}
    </p>
    <div class="flex gap-2">
      <div
        v-for="t in tech"
        :key="t"
        class="grid select-none items-center whitespace-nowrap rounded-lg bg-white py-0.5 px-2 text-xs font-italic uppercase text-black"
      >
        <span>{{t}}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const returnDomain = (domain) =>
  domain
    .match(/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/)
    .pop();

defineProps(["key", "name", "image", "description", "tech", "link"]);
</script>
