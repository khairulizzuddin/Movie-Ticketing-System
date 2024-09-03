<template>
  <v-container>
    <h1>Select a Movie</h1>
    <v-row>
      <v-col v-for="movie in movies" :key="movie.id" cols="12" sm="6" md="4">
        <v-card>
          <v-card-title>{{ movie.title }}</v-card-title>
          <v-card-subtitle>{{ movie.genre }} | {{ movie.duration }} min</v-card-subtitle>
          <v-card-text>
            Price: ${{ movie.price.toFixed(2) }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="selectMovie(movie)">Select</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const movies = ref([]);
    
    onMounted(async () => {
      const response = await axios.get('http://localhost:3000/movies');
      movies.value = response.data;
    });

    const selectMovie = (movie) => {
      localStorage.setItem('selectedMovie', JSON.stringify(movie));
      window.location.href = '/seat-map'; 
    };

    return {
      movies,
      selectMovie
    };
  }
};
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}
</style>


  