<template>
  <NuxtLayout name="default">
    <NuxtPage v-slot="{ Component }">
      <component :is="Component" />
    </NuxtPage>
  </NuxtLayout>
  <Teleport to="body">
    <TheNavbar />
  </Teleport>
</template>

<script lang="ts" setup>
import { useHead } from "#head";

const images = import.meta.glob("./assets/pageMeta/*.{png,svg,ico}", {
  as: "url",
  eager: true,
});

useHead({
  title: "Fabrizio Silvestri",
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: images["./assets/pageMeta/favicon.ico"],
      sizes: "32x32",
    },
    {
      property: "og:title",
      content: "Fabrizio Silvestri",
    },
    {
      name: "description",
      content: "Full Stack Developer and tech enthusiast",
    },
    {
      name: "og:description",
      content: "Full Stack Developer and tech enthusiast",
    },
    {
      name: "twitter:description",
      content: "Full Stack Developer and tech enthusiast",
    },
  ],
});
</script>
