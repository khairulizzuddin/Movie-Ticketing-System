<template>
  <v-container>
    <h1>Select Payment Method</h1>
    <v-form @submit.prevent="processPayment">
      <v-radio-group v-model="paymentMethod" :rules="[v => !!v || 'Payment method is required']">
        <v-radio label="Credit Card" value="credit-card"></v-radio>
        <v-radio label="Online Banking" value="online-banking"></v-radio>
      </v-radio-group>
      <v-btn type="submit" color="primary">Pay Now</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const paymentMethod = ref('');
    const router = useRouter();

    const processPayment = () => {
      alert(`Payment processed using ${paymentMethod.value}`);
      router.push('/booking-confirmation');
    };

    return {
      paymentMethod,
      processPayment
    };
  }
};
</script>

  
  