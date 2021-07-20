<template>
    <div>
        <h1>esta es la Movie: {{ $route.params.id }}</h1>
        <h4>titulo: {{movie.title}}</h4>
    </div>
</template>

<script>

import { movieService } from '../services/moviesApiService'

export default {
data() {
    return {
        movie: {}
    }
},
created() {
    this.getMovie();
},
methods: {
    async getMovie() {
        const res = await movieService.getById(this.$route.params.id)
        this.movie = res.data
        console.log(res.data)
    }
}
}
</script>

<style>

</style>