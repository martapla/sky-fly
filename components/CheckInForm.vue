<template>
    <form @submit.prevent="handleCheckIn"
      class="space-y-6 bg-pink-50 p-8 rounded-2xl shadow-md w-full max-w-md mx-auto border border-gray-200 font-mono text-gray-700 bg-cover bg-center">
  
      <h2 class="text-3xl font-normal text-gray-800 text-center font-sans">Continue to Check In</h2>
  
      <div class="text-md space-y-4">
        <p><strong>Reservation code:</strong> {{ bookingStore.bookingRef }}</p>
        <p><strong>Name:</strong> {{ bookingStore.name }}</p>
        <p><strong>Surname:</strong> {{ bookingStore.lastName }}</p>
      </div>
  
      <div>
        <label for="seat" class="block mb-1 text-sm font-semibold">Choose your seat</label>
        <select id="seat" v-model="seat"
          class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300">
          <option disabled value="">Select seat</option>
          <option>A1</option>
          <option>A2</option>
          <option>B1</option>
          <option>B2</option>
        </select>
      </div>
  
      <div>
        <label for="baggage" class="block mb-1 text-sm font-semibold">Choose baggage option</label>
        <select id="baggage" v-model="baggage"
          class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300">
          <option disabled value="">Select baggage</option>
          <option>Hand luggage only</option>
          <option>1 Checked bag</option>
          <option>2 Checked bags</option>
        </select>
      </div>
  
      <button type="submit"
        class="w-full bg-white border border-pink-300 text-pink-600 font-normal px-4 py-4 rounded-lg shadow-md hover:bg-pink-500 hover:text-white transition-all duration-200">
        Go to Boarding Pass
      </button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useBookingStore } from '@/stores/booking'
  import { useRouter } from 'vue-router'
  
  const bookingStore = useBookingStore()
  const router = useRouter()
  
  const seat = ref('')
  const baggage = ref('')
  
  const handleCheckIn = () => {
    if (!seat.value || !baggage.value) {
      alert('Please select both seat and baggage option.')
      return
    }
  
    bookingStore.setCheckInData({
    seat: seat.value,
    baggage: baggage.value
  })
  
    router.push('/boarding-pass')
  }
  </script>
  