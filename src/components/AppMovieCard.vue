<script>
export default {
    name: 'AppMovieCard',
    props: {
        movie: Object,
    },

}
</script>

<template>
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" class="card-img-top" alt="Movie poster" />
        <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.original_title }}</p>
            <p class="card-text">{{ movie.original_language }}</p>
            <span class="fi fi-gr"></span> <span class="fi fi-gr fis"></span>
            <p class="card-text">{{ movie.vote_average }}</p>
        </div>
    </div>
</template>

<style lang="scss">
@use "../assets/styles/appCard.scss";
</style>
