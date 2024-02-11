<template>
  <div>
    <NuxtLayout name="section">
      <SectionTitle>Featured Projects</SectionTitle>
      <p>Here are some of the personal projects that I'm proud of.</p>
      <div
        class="grid grid-cols-1 slg:grid-cols-2 gap-7 sm:gap-6 pt-8 mx-auto sm:w-5/6 slg:w-full"
      >
        <ProjectItem
          v-for="project in projects"
          :key="project.id"
          :description="project.description"
          :image="project.image"
          :link="project.link"
          :name="project.name"
          :tech="project.tech"
        />
      </div>
    </NuxtLayout>
  </div>
  <MainParagraph>
    <InlineLink to="projects">Read more...</InlineLink>
  </MainParagraph>
</template>

<script lang="ts" setup>
import { useProjectStore } from "~/store/projectStore";

const { getFeaturedProjects } = useProjectStore();

const projects = getFeaturedProjects;
</script>
