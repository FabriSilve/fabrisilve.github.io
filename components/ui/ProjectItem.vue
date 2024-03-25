<template>
  <a
      :href="link"
      target="_blank"
      class="flex flex-col w-full p-6 py-6 lg:p-6 lg:py-10 items-center gap-8 rounded-md bg-item_back hover:bg-item_hover_back transition-colors border-[1px] border-border_sm"
  >
    <img
        :alt="name"
        :src="image"
        class="w-full object-cover rounded-md slg:h-48"
    />
    <div class="flex flex-col justify-between gap-4 slg:gap-5">
      <span class="font-theme_bold text-lg text-head_text slg:text-xl">
        {{ name }}
      </span>
      <p class="text-sm md:text-base">
        {{ description }}
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
  </a>
</template>
<script setup lang="ts">
defineProps(["name", "image", "description", "tech", "link"]);
</script>
