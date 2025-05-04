import { defineStore } from 'pinia'

export const useBookingStore = defineStore('booking', {
  state: () => ({
    bookingRef: 'AA42FVN',
    name:'',
    lastName: '',   
    origin: '',      
    destination: '', 
    date: '',   
    seat: '',
    baggage: ''     
  }),

  actions: {
    setBookingData(bookingData: { origin: string; destination: string; date: string; name: string; lastName: string }) {
      this.origin = bookingData.origin
      this.destination = bookingData.destination
      this.date = bookingData.date
      this.name = bookingData.name
      this.lastName = bookingData.lastName
    },
    setCheckInData(data: { seat: string; baggage: string }) {
      this.seat = data.seat
      this.baggage = data.baggage
    }
  }
})
