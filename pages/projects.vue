<template>
  <NuxtLayout name="page">
    <MainTitle>Projects</MainTitle>
    <MainParagraph class="mt-2">
      Here are personal projects I've worked on in my past years. Not all are great but they have been really nice experiments.
    </MainParagraph>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25"/>
    <div class="flex flex-col items-center justify-center gap-28">
      <MainProjectItem
          v-for="proj in projects"
          :key="proj.id"
          :description="proj.description"
          :image="proj.image"
          :link="proj.link"
          :name="proj.name"
          :tech="proj.tech"
      />
    </div>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25"/>
    <SectionTitle>Graveyard</SectionTitle>
    <p>Projects I worked on and are no longer maintained.</p>
    <div class="flex flex-col mt-10 gap-6">
      <GraveyardItem
        v-for="proj in grave"
        :key="proj.id"
        :description="proj.description"
        :image="proj.image"
        :link="proj.link"
        :name="proj.name"
        :tech="proj.tech"
      />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import {useProjectStore} from "~/store/projectStore";

const {getAllProjects, getGraveProjects} = useProjectStore();

const projects = getAllProjects;
const grave = getGraveProjects;

</script>
