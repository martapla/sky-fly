<template>
    <div class="w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-lg overflow-hidden font-mono border border-pink-300 mx-4 sm:mx-auto">

      <!-- Top Section -->
      <div class="bg-pink-50 p-6 rounded-2xl">
        <h2 class="text-3xl font-normal text-pink-600 text-center font-sans mb-4">
          Boarding Pass
        </h2>
  
        <div class="text-md text-gray-800 space-y-2">
          <p><strong>Passenger:</strong> {{ bookingStore.name }} {{ bookingStore.lastName }}</p>
          <p><strong>From:</strong> {{ bookingStore.origin }}</p>
          <p><strong>To:</strong> {{ bookingStore.destination }}</p>
          <p><strong>Date:</strong> {{ bookingStore.date }}</p>
          <p><strong>Seat:</strong> {{ bookingStore.seat }}</p>
          <p><strong>Baggage:</strong> {{ bookingStore.baggage }}</p>
          <p><strong>Booking Ref:</strong> {{ bookingStore.bookingRef }}</p>
        </div>
      </div>
  
      <!-- Bottom Section -->
      <div class="bg-pink-100 px-6 py-4 text-center rounded-2xl">
        <div class="text-lg text-gray-500 ">Boarding Code</div>
        <div class="tracking-widest font-bold text-lg text-gray-800">
          {{ bookingStore.bookingRef }}
        </div>
        <div class="my-3 flex justify-center">
            <img
            src="/images/qr.png"
            alt="QR Code"
            class="w-1/2 sm:w-1/3 h-auto mx-auto "
            
            />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useBookingStore } from '@/stores/booking'
  
  const bookingStore = useBookingStore()
  </script>
  