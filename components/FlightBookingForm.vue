<template>
  <form @submit.prevent="handleSubmit"
    class="space-y-6 bg-pink-50 p-8 rounded-2xl shadow-md w-full max-w-md mx-auto border border-gray-200 font-mono text-gray-700 bg-cover bg-center">
    <h2 class="text-3xl font-normal text-gray-800 text-center font-sans">Start your Booking</h2>

    <div>
      <label for="origin" class="block mb-1 text-sm font-semibold">Origin</label>
      <select id="origin" v-model="bookingData.origin"
        class="w-full px-2 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300">
        <option value="" disabled selected>Select origin</option>
        <option>Barcelona</option>
        <option>Lisbon</option>
        <option>Madrid</option>
        <option>London</option>
        <option>Rome</option>
      </select>
    </div>

    <div>
      <label for="destination" class="block mb-1 text-sm font-semibold">Destination</label>
      <select id="destination" v-model="bookingData.destination"
        class="w-full px-2 pr-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300">
        <option value="" disabled selected>Select destination</option>
        <option>Paris</option>
        <option>Berlin</option>
        <option>Amsterdam</option>
        <option>Vienna</option>
        <option>Oslo</option>
      </select>
    </div>

    <div>
      <label for="date" class="block mb-1 text-sm font-semibold">Flight Date</label>
      <input id="date" v-model="bookingData.date" type="date"
        class="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300" />
    </div>

    <div>
      <label for="lastName" class="block mb-1 text-sm font-semibold">Your Name</label>
      <input id="lastName" v-model="bookingData.name" type="text" placeholder=" "
        class="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300" />
    </div>

    <div>
      <label for="lastName" class="block mb-1 text-sm font-semibold">Your Surname</label>
      <input id="lastName" v-model="bookingData.lastName" type="text" placeholder=" "
        class="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300" />
    </div>

    <button type="submit"
      class="w-full bg-white border border-pink-300 text-pink-600 font-normal px-4 py-4 rounded-lg shadow-md hover:bg-pink-500  hover:text-white transition-all duration-200">
      Confirm Booking
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useBookingStore } from '@/stores/booking'
import { useRouter } from 'vue-router'

const bookingStore = useBookingStore()
const router = useRouter()

const bookingData = ref({
  origin: '',
  destination: '',
  date: '',
  lastName: ''
})

const handleSubmit = () => {
  if (!bookingData.value.origin || !bookingData.value.destination || !bookingData.value.date || !bookingData.value.lastName) {
    alert('Please complete all fields!')
    return
  }

  bookingStore.setBookingData(bookingData.value)
  router.push('/booking-details')
}
</script>