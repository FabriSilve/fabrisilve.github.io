<template>
  <div>
    <NuxtLayout name="section">
      <SectionTitle>Words from Others</SectionTitle>
      <p>Here's what others have to say about me.</p>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8 mt-8">
        <ul class="space-y-8">
          <ReviewItem
            v-for="review in reviewsCol1"
            :key="review.id"
            :review="review.review"
            :name="review.name"
            :link="review.link"
            :role="review.role"
          />
        </ul>
        <ul class="hidden space-y-8 sm:block">
          <ReviewItem
            v-for="review in reviewsCol2"
            :key="review.id"
            :review="review.review"
            :name="review.name"
            :link="review.link"
            :role="review.role"
          />
        </ul>
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { useReviewStore } from "~/store/reviewStore";

const { getAllReviews } = useReviewStore();

const reviewsCol1 = getAllReviews.slice(0, Math.ceil(getAllReviews.length / 2));
const reviewsCol2 = getAllReviews.slice(Math.ceil(getAllReviews.length / 2));
</script>
