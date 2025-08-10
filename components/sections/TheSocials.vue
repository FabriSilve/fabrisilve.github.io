<template>
  <div
    class="flex justify-center sm:justify-between items-center flex-col sm:flex-row"
  >
    <div class="flex gap-1">
      <SocialIcon
        title="Github"
        link="https://github.com/FabriSilve"
        icon="ant-design:github-filled"
      />
      <SocialIcon
        title="LinkedIn"
        link="https://www.linkedin.com/in/fabrisilve"
        icon="ant-design:linkedin-filled"
      />
      <SocialIcon
        title="Instagram"
        link="https://www.instagram.com/fabri.silve"
        icon="ant-design:instagram-outlined"
      />
    </div>
    <div class="flex gap-4">
      <ActionButton link="mailto:me@fabrisilve.com">Contact Me </ActionButton>
      <ActionButton :link="resumeLink">Download CV </ActionButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import ActionButton from "../ui/ActionButton";
import SocialIcon from "../ui/SocialIcon";

// @ts-ignore
const pdfs = import.meta.glob("../../assets/pdf/*.pdf", {
  as: "url",
  eager: true,
});
const resumeLink = pdfs["../../assets/pdf/silvestri.pdf"];
</script>
