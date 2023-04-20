<script>
import { store } from '../store';

export default {
    name: 'AppMovieCard',
    props: {
        movie: Object,
    },
    computed: {
        flagIconClass() {
            return `fi-${this.getCountryCode(this.movie.original_language)}`;
        },
    },
    methods: {
        getCountryCode(languageCode) {
            return store.languageToCountry[languageCode] || languageCode;
        },
        isStarFilled(index) {
            const adjustedRating = this.movie.vote_average / 2;
            const roundedRating = Math.ceil(adjustedRating);
            return index < roundedRating;
        },
    },
};
</script>

<template>
    <div class="movie-card">
        <div class="h-100">
            <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" class="card-img-top h-100"
                alt="Movie poster" />
        </div>

        <div class="card-body d-none">
            <h5 class="card-title">{{ movie.title }}</h5>
            <h6 class="card-text">{{ movie.original_title }}</h6>
            <div class="card-text">
                <span :class="['fi', flagIconClass]"></span>
            </div>
            <div class="card-text">
                <i v-for="index in 5" :key="`star-${index}`"
                    :class="isStarFilled(index - 1) ? 'fas fa-star' : 'fa fa-star'"></i>
            </div>
            <div class="card-text">
                <span>{{ movie.overview }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../assets/styles/appCard.scss";
</style>
