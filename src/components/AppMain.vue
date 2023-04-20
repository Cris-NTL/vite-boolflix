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
        <div class="row">
            <div class="col">
                <h3>Movies:</h3>
                <div class="movie-cards-wrapper">
                    <div class="movie-cards">
                        <AppMovieCard v-for="(movie, index) in arrayMovies" :key="index" :movie="movie" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>Series:</h3>
                <div class="series-cards-wrapper">
                    <div class="series-cards">
                        <AppSeriesCard v-for="(series, index) in arraySeries" :key="index" :series="series" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../assets/styles/appMain.scss";
</style>