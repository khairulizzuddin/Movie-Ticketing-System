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
    
    // Fetch movies from the JSON Server
    onMounted(async () => {
      const response = await axios.get('http://localhost:3000/movies');
      movies.value = response.data;
    });

    const selectMovie = (movie) => {
      // Store the selected movie details and navigate to the seat map page
      localStorage.setItem('selectedMovie', JSON.stringify(movie));
      window.location.href = '/seat-map'; // Redirect to the seat map page
    };

    return {
      movies,
      selectMovie
    };
  }
};
</script>

<style scoped>
/* Basic styling for the movie cards */
.v-card {
  margin-bottom: 20px;
}
</style>


  