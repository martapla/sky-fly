<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center space-y-8 py-4 px-4 bg-cover bg-center"
    style="background-image: url('/images/sky.jpg')">

    <NuxtLink to="/" class="absolute top-4 left-4 text-white text-lg hover:text-pink-500">
      Home
    </NuxtLink>

    <h1 class="sm:mb-0 md:mb-8 text-white sky-title md:text-8xl md:pt-2 md:pb-6">Sky Fly</h1>
    <BookingDetailsForm />
  </div>
</template>

<script setup>
import BookingDetailsForm from '@/components/BookingDetailsForm.vue'
</script>