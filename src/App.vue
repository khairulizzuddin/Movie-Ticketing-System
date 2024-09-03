<template>
  <v-app dark> 
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>🎬 KEX Cinema</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!isLoggedIn" @click="goToSignUp" color="secondary" outlined>Sign Up</v-btn>
      <v-btn v-if="isLoggedIn" @click="logout" color="error" outlined>Logout</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="8" md="6">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app color="primary" dark>
      <v-col class="text-center white--text">
        © 2023 KEX Cinema | All Rights Reserved
      </v-col>
    </v-footer>

    <v-fab-transition>
      <v-btn v-if="showBackButton" @click="goBack" class="back-button" fab dark color="secondary">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-app>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const isLoggedIn = computed(() => !!localStorage.getItem('user'));

    const showBackButton = computed(() => {
      return router.currentRoute.value.path !== '/sign-up';
    });

    const goToSignUp = () => {
      router.push('/sign-up');
    };

    const logout = () => {
      localStorage.removeItem('user');
      router.push('/sign-up');
    };

    const goBack = () => {
      router.back();
    };

    return {
      isLoggedIn,
      showBackButton,
      goToSignUp,
      logout,
      goBack
    };
  }
};
</script>

<style scoped>
.v-container {
  margin-top: 50px;
}

.v-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.back-button {
  position: fixed;
  bottom: 16px;
  right: 16px;
}

.v-app-bar {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.v-card {
  transition: transform 0.3s ease;
}

.v-card:hover {
  transform: scale(1.03);
}
</style>






