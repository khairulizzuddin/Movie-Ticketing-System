import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Import Vuetify styles
import '@mdi/font/css/materialdesignicons.css'; // Import Material Design Icons

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#8B0000', // Dark Red
          secondary: '#000000', // Black
          accent: '#FF0000', // Bright Red for accents
          error: '#D32F2F',
          info: '#0288D1',
          success: '#388E3C',
          warning: '#FFA000'
        },
        dark: false
      },
      dark: {
        colors: {
          primary: '#8B0000', // Dark Red
          secondary: '#000000', // Black
          accent: '#FF0000', // Bright Red for accents
          error: '#CF6679',
          info: '#03DAC6',
          success: '#03DAC6',
          warning: '#FBC02D'
        },
        dark: true
      }
    }
  },
  icons: {
    defaultSet: 'mdi', // Use Material Design Icons
  }
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount('#app');


