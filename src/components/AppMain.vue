<script>
import { store } from '../store';

export default {
    name: 'AppMain',
    computed: {
        arrayMovies() {
            return store.arrayMovies;
        },
        arraySeries() {
            return store.arraySeries;
        },
    },
};
</script>

<template>
    <div class="container">
        <div class="row d-flex flex-wrap justify-content-center">
            <h3>Movies:</h3>
            <div class="col-md-4" v-for="(movie, index) in arrayMovies" :key="index">

                <!-- <div class="card">
                    <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" class="card-img-top"
                        alt="Movie poster" />
                    <div class="card-body">
                        <h5 class="card-title">{{ movie.title }}</h5>
                        <p class="card-text">{{ movie.original_title }}</p>
                        <p class="card-text">{{ movie.original_language }}</p>
                        <p class="card-text">{{ movie.vote_average }}</p>
                    </div>
                </div> -->

            </div>
        </div>
        <div class="row d-flex flex-wrap justify-content-center">
            <h3>Series:</h3>
            <div class="col-md-4" v-for="(series, index) in arraySeries" :key="index">

                <!-- <div class="card">
                    <img :src="`https://image.tmdb.org/t/p/w342${series.poster_path}`" class="card-img-top"
                        alt="Series poster" />
                    <div class="card-body">
                        <h5 class="card-title">{{ series.name }}</h5>
                        <p class="card-text">{{ series.original_title }}</p>
                        <p class="card-text">{{ series.original_language }}</p>
                        <p class="card-text">{{ series.vote_average }}</p>
                    </div>
                </div> -->

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/appMain.scss";
</style>