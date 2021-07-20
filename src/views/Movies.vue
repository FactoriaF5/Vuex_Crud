<template>
  <div class="home">
    <h3>counter : {{counter}}</h3>
    <article v-for="(movie, i) in movieList" :key="i" @click="getMovieDetail(movie.id)">
      {{movie.id}} - {{movie.title}}
    </article>
    <input type="text" v-model="newMovie.title"><button @click="addMovie">Ok</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { movieService } from '../services/moviesApiService'

export default {
  name: 'Home',
  components: {
  
  },
  data() {
    return {
      movieList: [],
      newMovie: {}
    }
  },
  created() {
    this.getAllMovies();
  },
  methods: {
    async addMovie() {
      const res = await movieService.save(this.newMovie)
      this.movieList = [...this.movieList, res.data]
      this.newMovie = {}
    } ,
    async getAllMovies() {
      const res = await movieService.getAll();
      this.movieList = res.data
    },
    getMovieDetail(id)
    {
        this.$router.push('/movies/' + id)
    } 
  },
  computed: {
    counter() {
      return this.movieList.length
    }
  }


}
</script>
