<template>
  <div
    class="min-h-screen bg-gray-100 flex flex-col items-center sm:pt-6 md:pt-8 space-y-8 py-4  px-4 bg-cover bg-center"
    style="background-image: url('/images/sky.jpg')">

    <h1 class=" text-white sky-title md:text-8xl md:p-6">Sky Fly</h1>

    <div class="w-full max-w-xl">
      <FlightBookingForm />
    </div>

  </div>
</template>

<script setup>
  import FlightBookingForm from '@/components/FlightBookingForm.vue'
</script>