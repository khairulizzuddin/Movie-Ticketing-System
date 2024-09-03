<template>
  <v-container>
    <h1>Sign Up</h1>
    <v-form @submit.prevent="signUp">
      <v-text-field v-model="email" label="Email" required></v-text-field>
      <v-text-field v-model="password" type="password" label="Password" required></v-text-field>
      <v-text-field v-model="phoneNumber" label="Phone Number" required></v-text-field>
      <v-btn type="submit" color="primary">Sign Up</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const phoneNumber = ref('');
    const router = useRouter();

    const signUp = async () => {
      try {
        await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: email.value, password: password.value, phoneNumber: phoneNumber.value })
        });
        router.push('/movies');
      } catch (error) {
        console.error('Error signing up:', error);
      }
    };

    return { email, password, phoneNumber, signUp };
  }
};
</script>

  