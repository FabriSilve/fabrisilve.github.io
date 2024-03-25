<template>
  <li class="text-sm leading-6">
    <div class="relative group">
      <div class="absolute rounded-lg opacity-100 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur">
      </div>
      <div
        class="relative p-6 space-y-6 leading-none rounded-lg bg-item_back hover:bg-item_hover_back ring-1 ring-gray-900/5">
        <div class="flex items-center justify-between space-x-4">
          <div>
            <h3 class="text-lg font-semibold text-white">{{name}}</h3>
            <p class="text-gray-500 text-md">{{role}}</p>
          </div>
          <SocialIcon title="LinkedIn" :link="link" icon="ant-design:linkedin-filled" />
        </div>
        <p class="leading-normal text-gray-300 text-md">{{review}}</p>
        <div class="flex items-center justify-center space-x-2 mt-4">
          <div v-for="n in 5">
            <svg class="text-yellow-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor" stroke="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
<script setup lang="ts">
defineProps(["name", "link", "review", "role"]);
</script>
