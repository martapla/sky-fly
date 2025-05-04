<template>
  <div class="bg-pink-50 border border-gray-200 rounded-2xl shadow-md p-8 w-full max-w-md font-mono text-gray-800">
    <h2 class="text-3xl font-normal text-center text-gray-800 font-sans mb-6">
      Your Booking Details
    </h2>

    <div class="space-y-4 text-md">
      <p><strong>Booking Reference:</strong> {{ bookingStore.bookingRef }}</p>
      <p><strong>Name:</strong> {{ bookingStore.name }}</p>
      <p><strong>Surname:</strong> {{ bookingStore.lastName }}</p>
      <p><strong>Origin:</strong> {{ bookingStore.origin }}</p>
      <p><strong>Destination:</strong> {{ bookingStore.destination }}</p>
      <p><strong>Flight Date:</strong> {{ bookingStore.date }}</p>
    </div>

    <button
      type="button"
      class="w-full mt-6 bg-white border border-pink-300 text-pink-600 font-normal px-4 py-4 rounded-lg shadow-md hover:bg-pink-500 hover:text-white transition-all duration-200"
      @click="goToCheckIn"
    >
      Go to Check-in
    </button>
  </div>
</template>

<script setup>
import { useBookingStore } from '@/stores/booking'
import { useRouter } from 'vue-router'

const bookingStore = useBookingStore()
const router = useRouter()

const goToCheckIn = () => {
  router.push('/check-in')
}
</script>
