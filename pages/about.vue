<template>
  <div>
    <NuxtLayout name="page">
      <img :src="TopImage" class="w-full h-64 rounded-xl object-cover" />
      <div class="flex flex-col gap-6 lg:gap-9 mx-auto w-full md:w-10/12">
        <SectionParagraph>
          I'm Fabrizio Silvestri, an Italian in Sweden with never-stopping love for learning new tech. I am specialised
          in Web Development and Software tools to support DevX. I am passionate about coding and designing tech
          solutions for real live problems.
        </SectionParagraph>
        <SectionParagraph>
          I started learning about web development in my early high school years, where I was introduced to small
          webpages with simple HTML, CSS and JS. After my high-school, I took the univeristy path to increase my skills
          in this fascinating IT world and I graduated in Computer Science at the University of Genoa, Italy. During my
          university years I had the chance to work on some small projects and I started to learn about the backend side
          of the web with PHP, C#, Java and MySQL. I also started to learn about the Linux world and the terminal, which
          is now my daily driver.
        </SectionParagraph>
        <SectionParagraph>
          You can find some of my experimental side projects on my
          <LinkBtn link="https://github.com/FabriSilve" text="Github" /> or on my
          <LinkBtn link="/" text="Portfolio" /> page. I usually don't update my portfolio page but all my recent one's
          are on github.
        </SectionParagraph>
        <SectionParagraph>
          Outside of my work-life, I love to play Ukulele, doing Film Photography and Cooking. You can
          follow along about my life on my
          <LinkBtn link="https://www.instagram.com/fabri.silve" text="Instagram" />.
        </SectionParagraph>

        <SectionSeparator>Moank AB</SectionSeparator>
        <SectionParagraph>
          I started my career working full time as full stack developer for
          <LinkBtn link="https://www.moank.se/" text="Moank AB" />, a cool heavy tech oriented bank based in Stockholm.
          I got "adopted" by the founders of the company in mid 2018 after graduating. The company was still at a
          Startup phase and I've been working on the development of the bank's core system since I was a Junior
          Developer.
        </SectionParagraph>
        <SectionParagraph>
          During this career opportunity I had the chance to mature to the Engineer Manager and CTO position passing
          through the roles of
          Senior Developer and Engineer Project Manager. I refined my skills in the stack used by the company: React,
          NodeJS, Typescript, MongoDB, AWS Cloud and Docker. I also had the chance to work with Python and Falcon for
          some internal tools.
        </SectionParagraph>
        <SectionParagraph>
          Given the small size of the company, I often had to wear multiple hats including the DevOps Engineer one,
          setting up the CI/CD pipelines and the infrastructure on AWS using CDK. I also worked with the Product team,
          helping panning the roadmap and the features for the projects. I became the tech reference for the company
          mentoring and lead the other developers in the team and support the meetings with external partners.
        </SectionParagraph>

        <SectionSeparator>Mevisio AB</SectionSeparator>
        <SectionParagraph>
          After a long dive in the banking industry, I decided to felt was my time to leave the company and start a new
          adventure. I started working as a Full Stack Engineer for
          <LinkBtn link="https://mevisio.com/" text="Mevisio AB" />, a small but active company developing a really
          flexible tool to support work in factories. The main product is a platform completely customisable that
          allowed the customer to generate the whiteboards for each team to smothly automise data visualisation and
          information flows within all the company layers.
        </SectionParagraph>
        <SectionParagraph>
          The project is pushing to the edge several technologies and I'm really proud of the results I acheved there.
          I've been working on the frontend side of the project with React, the backend with Node and the infrastructure
          done on Kubernetes. The cherry on the cake of the project was an in house built compiler to support the
          configuration of the full platform through the language the company defined.
        </SectionParagraph>
        <SectionParagraph>
          Beside the actual work on the codebase of the company, I had the luck of being part of a really experience
          team where I was able to grow and learn a lot. Since I joined the company I decided to move into the Nvim
          world and start exploring more terminal tools and AI coding agents. I had also multiple "opportunities" with
          some performace issues or feature bugs on production to considerably increase my skills in debugging code I
          didn't write to identify the failing code.
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
