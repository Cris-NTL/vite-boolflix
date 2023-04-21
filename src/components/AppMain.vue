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
    methods: {
        handleWheel(event) {
            const horizontalScrollSpeed = 1;
            const isCardBody = event.target.closest('.card-body');
            if (!isCardBody) {
                event.currentTarget.scrollLeft += event.deltaY * horizontalScrollSpeed;
            }
        },
    },
};
</script>

<template>
    <div class="container">
        <div class="row mb-5">
            <div class="col">
                <h3>Original BoolFlix Movies:</h3>
                <div class="cards-container" ref="cardsContainerMovies" @wheel="handleWheel">
                    <AppMovieCard v-for="(movie, index) in arrayMovies" :key="index" :movie="movie" />
                </div>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col">
                <h3>Original BoolFlix Series:</h3>
                <div class="cards-container" ref="cardsContainerSeries" @wheel="handleWheel">
                    <AppSeriesCard v-for="(series, index) in arraySeries" :key="index" :series="series" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/styles/appMain.scss";
</style>