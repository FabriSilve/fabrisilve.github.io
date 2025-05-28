<script lang="ts" setup>
import { useReviewStore } from "~/store/reviewStore";

const { getAllReviews } = useReviewStore();
const showModal = useState(() => false);

const reviewsCol1 = getAllReviews.slice(0, Math.ceil(getAllReviews.length / 2));
const reviewsCol2 = getAllReviews.slice(Math.ceil(getAllReviews.length / 2));

</script>

<template>
  <NuxtLayout name="page">
    <MainTitle>Reviews</MainTitle>
    <MainParagraph class="-mt-2">
      In my career I had the opportunity to work with a lot of different people and companies. Here are some of the
      feedbacks I received from colleagues and partners.
    </MainParagraph>
    <div class="flex w-full flex-col gap-4 md:flex-row md:gap-8 justify-between items-center">
      <SectionParagraph>
        Did you work with me and do you want to leave me a review to help me improve? Please do it!
      </SectionParagraph>
      <ActionButton link="https://forms.gle/jsGhfNZEGuCSRnro8">Review{{ '\xa0' }}me!</ActionButton>
      <!-- <button @click="showModal = true" -->
      <!--   class="bg-btn_back border-[1px] border-link_border px-2 py-2 rounded-md font-theme_bold text-btn_text text-sm hover:bg-border_sm transition-colors md:px-4 slg:text-base slg:px-6 slg:py-3 w-fit"> -->
      <!--   Review{{ '\xa0' }}me! -->
      <!-- </button> -->
    </div>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25" />
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8 mt-8">
      <ul class="space-y-8">
        <ReviewItem v-for="review in reviewsCol1" :key="review.id" :review="review.review" :name="review.name"
          :link="review.link" :role="review.role" />
      </ul>
      <ul class="space-y-8">
        <ReviewItem v-for="review in reviewsCol2" :key="review.id" :review="review.review" :name="review.name"
          :link="review.link" :role="review.role" />
      </ul>
    </div>
    <!-- <ReviewModal :show="showModal" @close="showModal = false" /> -->
  </NuxtLayout>
</template>
