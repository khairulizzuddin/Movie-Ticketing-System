<template>
  <v-container>
    <h1>Booking Confirmation</h1>
    <p>Your booking has been confirmed. Thank you for choosing our service!</p>
    <v-btn @click="$router.push('/movies')" color="primary">Back to Movies</v-btn>
  </v-container>
</template>

<script>
export default {
  setup() {
    return {};
  }
};
</script>
  