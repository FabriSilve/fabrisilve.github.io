<template>
  <div>
    <div class="mb-3">
      <NuxtLayout name="section">
        <SectionTitle>Words from Others</SectionTitle>
        <p>Here's what others have to say about me.</p>
        <div
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8 mt-8"
        >
          <ul class="hidden space-y-8 sm:block">
            <ReviewItem
              v-for="review in reviewsCol1"
              :key="review.name"
              :review="review.review"
              :name="review.name"
              :link="review.link"
              :role="review.role"
            />
          </ul>
          <ul class="space-y-8">
            <ReviewItem
              v-for="review in reviewsCol2"
              :key="review.name"
              :review="review.review"
              :name="review.name"
              :link="review.link"
              :role="review.role"
            />
          </ul>
        </div>
      </NuxtLayout>
    </div>
    <MainParagraph>
      <InlineLink to="reviews">Read more...</InlineLink>
    </MainParagraph>
  </div>
</template>

<script lang="ts" setup>
import { useReviewStore } from "~/store/reviewStore";

const { getBestReviews } = useReviewStore();

const reviewsCol1 = getBestReviews
  .slice(0, Math.ceil(getBestReviews.length / 2))
  .sort((a, b) => (a.score < b.score ? 1 : -1));
const reviewsCol2 = getBestReviews
  .slice(Math.ceil(getBestReviews.length / 2))
  .sort((a, b) => (a.score < b.score ? 1 : -1));
</script>
