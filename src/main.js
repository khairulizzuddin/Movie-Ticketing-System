import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#8B0000',
          secondary: '#000000',
          accent: '#FF0000',
          error: '#D32F2F',
          info: '#0288D1',
          success: '#388E3C',
          warning: '#FFA000'
        },
        dark: false
      },
      dark: {
        colors: {
          primary: '#8B0000',
          secondary: '#000000',
          accent: '#FF0000',
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
    defaultSet: 'mdi',
  }
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount('#app');


