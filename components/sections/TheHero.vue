<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-center">
      <img :src="profileImg" alt="" class="w-72 h-auto md:w-96 rounded-full " />
    </div>
    <MainTitle><i className="text-sm sm:text-lg md:text-2xl lg:text-3xl">joy</i>Full Stack Engineer</MainTitle>
    <MainParagraph>
      I'm Fabrizio Silvestri, a curious Software Engineer. I specialised my skills in Web Development with NodeJS, NoSQL
      databases and RESTful APIs. I am also a fan of Javascript frameworks, working with React and
      exploring ideas with Vue. My DevOps experience is based on Docker
      and AWS Cloud with a recent dive in the kubernetes dimension.
    </MainParagraph>
    <!-- <MainParagraph> -->
    <!--   When I'm not building, I'm digging into practical or theoretical topics and documenting my findings. My -->
    <!--   <a href="https://notes.fabrisilve.com" -->
    <!--     class="border-b-2 border-link_border hover:border-link_border_hover hover:text-link_text_hover transition-colors text-link" -->
    <!--     target="_blank" rel="noopener noreferrer">Field Notes</a> space -->
    <!--   is where I share investigations, experiments, and those satisfying <strong>"aha!"</strong> moments. -->
    <!-- </MainParagraph> -->
    <MainParagraph>
      <InlineLink to="about">Read more...</InlineLink>
    </MainParagraph>
  </div>
</template>

<script setup lang="ts">
import profileImg from "../../assets/imgs/profile.jpg";
</script>
