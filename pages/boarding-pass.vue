<template>
    <div class="min-h-screen bg-gray-100 flex flex-col items-center space-y-8 py-4 px-4 bg-cover bg-center"

    style="background-image: url('/images/sky.jpg')">
    <NuxtLink to="/" class="absolute top-4 left-4 text-white text-lg hover:text-pink-500">
       Home
    </NuxtLink>

    <h1 class="sm:mb-0 md:mb-8 text-white sky-title ">Sky Fly</h1>

    <BoardingPass />
  </div>
</template>

<script setup>
import BoardingPass from '@/components/BoardingPass.vue'
</script>
