<template>
  <v-container>
    <h1>Select Seats and Showtime</h1>
    <v-row>
      <v-col v-for="(row, rowIndex) in 15" :key="rowIndex" cols="12">
        <v-row>
          <v-col v-for="(seat, seatIndex) in 10" :key="seatIndex" cols="auto">
            <v-btn
              :color="seats[rowIndex][seatIndex].booked ? 'red' : (seats[rowIndex][seatIndex].selected ? 'yellow' : 'green')"
              :disabled="seats[rowIndex][seatIndex].booked"
              @click="selectSeat(rowIndex, seatIndex)"
            >
              {{ rowIndex + 1 }}-{{ seatIndex + 1 }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-select v-model="selectedTime" :items="times" label="Select Showtime" required></v-select>
    <v-btn @click="proceedToReview" :disabled="selectedSeats.length === 0 || !selectedTime" color="primary">Review Booking</v-btn>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const seats = ref(Array.from({ length: 15 }, () => Array.from({ length: 10 }, () => ({ booked: false, selected: false }))));
    const selectedSeats = ref([]);
    const selectedTime = ref('');
    const times = ref(['10:00 AM', '01:00 PM', '04:00 PM', '07:00 PM']);
    const router = useRouter();

    const fetchSeats = async () => {
      try {
        const response = await fetch('http://localhost:3000/bookings');
        const bookings = await response.json();
        bookings.forEach(booking => {
          seats.value[booking.row][booking.seat].booked = true;
        });
      } catch (error) {
        console.error('Error fetching seat data:', error);
      }
    };

    const selectSeat = (rowIndex, seatIndex) => {
      if (!seats.value[rowIndex][seatIndex].booked) {
        const seat = `${rowIndex + 1}-${seatIndex + 1}`;
        const index = selectedSeats.value.indexOf(seat);
        if (index === -1) {
          selectedSeats.value.push(seat);
        } else {
          selectedSeats.value.splice(index, 1);
        }
        seats.value[rowIndex][seatIndex].selected = !seats.value[rowIndex][seatIndex].selected;
      }
    };

    const proceedToReview = () => {
      localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats.value));
      localStorage.setItem('selectedTime', selectedTime.value);
      router.push('/review-booking');
    };

    onMounted(fetchSeats);

    return {
      seats,
      selectedSeats,
      selectedTime,
      times,
      selectSeat,
      proceedToReview
    };
  }
};
</script>





 