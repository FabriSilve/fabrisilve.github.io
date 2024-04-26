<template>
  <div class="flex flex-col gap-5">
    <div class="flex justify-center">
      <img
        :src="profileImg"
        alt=""
        class="w-72 h-auto md:w-96 rounded-full " />
    </div>
    <MainTitle><i className="text-sm sm:text-lg md:text-2xl lg:text-3xl">joy</i>Full Stack Developer</MainTitle>
    <MainParagraph>
      I'm Fabrizio Silvestri, a Full Stack Developer and Tech Leader. I specialised my skills in Web Development with NodeJS, NoSQL databases and RESTful APIs. I am also a fan of Javascript frameworks and I like relying on Docker and AWS Cloud. (I have some experience in Python too!)
    </MainParagraph>
    <MainParagraph>
      I'm currently working full time as CTO for <LinkBtn link="https://www.moank.se/" text="Moank AB"/>, a cool heavy tech oriented bank based in Stockholm, Sweden. I'm open to learn new technologies and I'm always looking for new challenges.
    </MainParagraph>
    <MainParagraph>
      <InlineLink to="about">Read more...</InlineLink>
    </MainParagraph>
  </div>
</template>

<script setup lang="ts">
import profileImg from "../../assets/imgs/profile.jpg";
</script>