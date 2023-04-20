<script>
import { store } from '../store';
import AppMovieCard from './AppMovieCard.vue';
import AppSeriesCard from './AppSeriesCard.vue';

export default {
    name: 'AppMain',
    components: {
        AppMovieCard,
        AppSeriesCard,
    },
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
                <AppMovieCard :movie="movie"></AppMovieCard>
            </div>
        </div>
        <div class="row d-flex flex-wrap justify-content-center">
            <h3>Series:</h3>
            <div class="col-md-4" v-for="(series, index) in arraySeries" :key="index">
                <AppSeriesCard :series="series"></AppSeriesCard>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/appMain.scss";
</style>