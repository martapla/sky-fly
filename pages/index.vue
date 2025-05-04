<template>
  <div
    class="min-h-screen bg-gray-100 flex flex-col items-center space-y-8 py-10 px-4 bg-cover bg-center"
    style="background-image: url('/images/sky.jpg')">

    <h1 class="mb-8 text-white sky-title">Sky Fly</h1>

    <div class="w-full max-w-xl">
      <FlightBookingForm />
    </div>

  </div>
</template>

<script setup>
  import FlightBookingForm from '@/components/FlightBookingForm.vue'
</script>