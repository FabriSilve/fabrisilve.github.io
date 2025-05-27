<template>
  <div>
    <NuxtLayout name="page">
      <img :src="TopImage" class="w-full h-64 rounded-xl object-cover" />
      <div class="flex flex-col gap-6 lg:gap-9 mx-auto w-full md:w-10/12">
        <SectionParagraph>
          I'm Fabrizio Silvestri, an Italian living in Sweden with an unstoppable love for learning new tech. I
          specialize in Web Development and Software Tools that support Developer Experience (DevX). I'm passionate
          about coding and designing tech solutions for real-life problems.
        </SectionParagraph>
        <SectionParagraph>
          I began learning web development in high school, where I was introduced to small webpages using basic HTML,
          CSS, and JavaScript. After high school, I pursued a degree in Computer Science at the University of Genoa,
          Italy, to deepen my knowledge of this fascinating IT world. During university, I worked on several small
          projects and started exploring backend development with PHP, C#, Java, and MySQL. I also began diving into the
          Linux ecosystem and the terminal, which has since become my daily driver.
        </SectionParagraph>
        <SectionParagraph>
          You can find some of my experimental side projects on my
          <LinkBtn link="https://github.com/FabriSilve" text="Github" /> or on my
          <LinkBtn link="/" text="Portfolio" /> page.
        </SectionParagraph>
        <SectionParagraph>
          Outside of work, I enjoy playing the ukulele, doing film photography, and cooking. You can follow along with
          my personal life on
          <LinkBtn link="https://www.instagram.com/fabri.silve" text="Instagram" />.
        </SectionParagraph>

        <SectionSeparator>Moank AB</SectionSeparator>
        <SectionParagraph>
          I started my career as a full-time Full Stack Developer at
          <LinkBtn link="https://www.moank.se/" text="Moank AB" />, a tech-oriented bank based in Stockholm. I was
          “adopted” by the company’s founders in mid-2018 after graduating, when the company was still in its startup
          phase. I contributed to the development of the bank’s core system from the very beginning, starting as a
          Junior Developer.
        </SectionParagraph>
        <SectionParagraph>
          Over time, I advanced through several roles—Senior Developer, Engineering Project Manager—and eventually
          became Engineering Manager and CTO. During this time, I refined my skills in Moank’s stack: React, Node.js,
          TypeScript, MongoDB, AWS Cloud, and Docker. I also worked with Python and Falcon to build internal tools.
        </SectionParagraph>
        <SectionParagraph>
          Due to the small size of the company, I often wore multiple hats, including that of a DevOps Engineer—setting
          up CI/CD pipelines and infrastructure on AWS using CDK. I collaborated with the Product team to help plan
          roadmaps and features, and I became the company’s technical reference point—mentoring and leading other
          developers, and supporting meetings with external partners.
        </SectionParagraph>

        <SectionSeparator>Mevisio AB</SectionSeparator>
        <SectionParagraph>
          After several years in the banking sector, I felt it was time for a new adventure. I joined
          <LinkBtn link="https://mevisio.com/" text="Mevisio AB" />, as a Full Stack Engineer. Mevisio is a small but
          dynamic company building a highly flexible platform for factory workflows. The main product allows customers
          to create customizable whiteboards to streamline data visualization and information flow across all company
          levels.
        </SectionParagraph>
        <SectionParagraph>
          The project pushes the boundaries of several technologies, and I’m proud of what I’ve achieved here. I’ve
          worked on the frontend with React, the backend with Node.js, and infrastructure with Kubernetes. One highlight
          was building an in-house compiler to configure the entire platform via a domain-specific language.
        </SectionParagraph>
        <SectionParagraph>
          Beyond coding, I’ve been fortunate to work in a highly experienced team where I’ve learned and grown
          significantly. Since joining, I’ve embraced the Neovim (Nvim) ecosystem and started exploring terminal-based
          tools and AI coding agents. I’ve also had many hands-on opportunities to improve my debugging skills by
          resolving performance issues and production bugs in unfamiliar codebases.
        </SectionParagraph>
      </div>
      <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6" />
      <div class="flex flex-col gap-5">
        <SectionTitle>Experience
          <LinkBtn :link="resumeLink" text="(Resume)" />
        </SectionTitle>
        <NuxtLayout name="section">
          <WorkListItem v-for="work in works" :key="work.id" :work="work" />
        </NuxtLayout>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useWorkStore } from "../store/workStore";
import TopImage from "../assets/imgs/about-image.jpg"

const workStore = useWorkStore();
const works = workStore.getAllWorks;

// @ts-ignore
const pdfs = import.meta.glob("../assets/pdf/*.pdf", { as: 'url', eager: true });
const resumeLink = pdfs["../assets/pdf/silvestri.pdf"];

</script>
