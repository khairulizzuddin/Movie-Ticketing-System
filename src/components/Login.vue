<template>
  <v-container>
    <v-form @submit.prevent="login">
      <v-text-field
        v-model="email"
        label="Email"
        type="email"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        required
      ></v-text-field>
      <v-btn type="submit" color="primary">Login</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const response = await fetch(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
      const users = await response.json();

      if (users.length > 0) {
        localStorage.setItem('user', JSON.stringify(users[0]));
        this.$router.push('/');
      } else {
        alert('Login failed');
      }
    },
  },
};
</script>

  