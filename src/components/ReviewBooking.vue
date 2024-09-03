<template>
  <v-container>
    <h1>Review Your Booking</h1>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Movie: {{ bookingDetails.movie.title }}</v-list-item-title>
          <v-list-item-subtitle>Seats: {{ bookingDetails.seats.join(', ') }}</v-list-item-subtitle>
          <v-list-item-subtitle>Showtime: {{ bookingDetails.time }}</v-list-item-subtitle>
          <v-list-item-subtitle>Total Price: {{ bookingDetails.totalPrice }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-btn @click="proceedToPayment" color="primary">Proceed to Payment</v-btn>
  </v-container>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const bookingDetails = ref({
      movie: JSON.parse(localStorage.getItem('selectedMovie') || '{}'),
      seats: JSON.parse(localStorage.getItem('selectedSeats') || '[]'),
      time: localStorage.getItem('selectedTime') || '',
      totalPrice: '$20.00'
    });
    const router = useRouter();

    const proceedToPayment = () => {
      router.push('/payment');
    };

    return {
      bookingDetails,
      proceedToPayment
    };
  }
};
</script>

  
  