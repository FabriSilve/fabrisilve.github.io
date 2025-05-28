<script setup>
import { ref } from 'vue'

const props = defineProps({
  show: Boolean,
})

const emit = defineEmits(['close'])

const credentials = ref('')
const feedback = ref('')
const rating = ref('')

const FORM_ID = '1FAIpQLSffV7YkWLhkQWHK-kvu2BDJ1UoaXtvlkmW9GDFKHsESkZcCkQ';

const formUrl =
  `https://docs.google.com/forms/u/0/d/e/${FORM_ID}/formResponse`
const fields = {
  credentials: 'entry.587335568',
  feedback: 'entry.2014932896',
  rating: 'entry.208976206',
}

function handleSubmit() {
  setTimeout(() => {
    emit('close')
    credentials.value = ''
    feedback.value = ''
    rating.value = ''
    alert('Thanks for your feedback! 🎉')
  }, 200)
}
</script>

<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
    <div class="relative bg-[#0f0f0f] text-white p-6 rounded-2xl shadow-2xl w-full max-w-lg border border-purple-500"
      style="font-family: 'Fira Code', monospace; box-shadow: 0 0 20px #ff00cc;">
      <button @click="$emit('close')" class="absolute top-2 right-4 text-gray-400 hover:text-white text-3xl">
        &times;
      </button>

      <h2 class="text-2xl font-semibold mb-2 text-white">Leave a Review</h2>

      <p class="text-sm text-pink-400 mb-4">
        Note: I may associate this review with your LinkedIn profile for authenticity.
      </p>

      <!-- Real form posting to Google Form -->
      <form :action="formUrl" method="POST" target="hidden_iframe" @submit="handleSubmit" class="space-y-4">
        <input type="hidden" name="fvv" value="1" />
        <input type="hidden" name="draftResponse" value="[]" />
        <input type="hidden" name="pageHistory" value="0" />

        <div>
          <label class="block text-sm text-pink-300">Who are you?</label>
          <input v-model="credentials" :name="fields.credentials" required
            class="w-full bg-black border border-pink-500 rounded p-2 text-white" />
        </div>

        <div>
          <label class="block text-sm text-pink-300">What is your experience working with me?</label>
          <textarea v-model="feedback" :name="fields.feedback" required rows="4"
            class="w-full bg-black border border-pink-500 rounded p-2 text-white"></textarea>
        </div>

        <div>
          <label class="block text-sm text-pink-300">If I was a restaurant, how many stars will you give me?</label>
          <select v-model="rating" :name="fields.rating" required
            class="w-full bg-black border border-pink-500 rounded p-2 text-white">
            <option value="">No rating</option>
            <option v-for="n in 5" :key="n" :value="n">{{ n }} ★</option>
          </select>
        </div>

        <button type="submit" class="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded mt-2 text-white">
          Submit Review
        </button>
        <iframe name="hidden_iframe" style="display:none;"></iframe>
      </form>
    </div>
  </div>
</template>
