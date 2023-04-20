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
    },
};
</script>

<template>
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" class="card-img-top" alt="Movie poster" />
        <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <h6 class="card-text">{{ movie.original_title }}</h6>
            <p class="card-text">
                <span :class="['fi', flagIconClass]"></span>
            </p>
            <p class="card-text">{{ movie.vote_average }}</p>
        </div>
    </div>
</template>

<style lang="scss">
@use "../assets/styles/appCard.scss";
</style>
