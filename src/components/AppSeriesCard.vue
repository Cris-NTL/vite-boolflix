<script>
import { store } from '../store';

export default {
    name: 'AppSeriesCard',
    props: {
        series: Object,
    },
    computed: {
        flagIconClass() {
            return `fi-${this.getCountryCode(this.series.original_language)}`;
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
        <img :src="`https://image.tmdb.org/t/p/w342${series.poster_path}`" class="card-img-top" alt="Series poster" />
        <div class="card-body">
            <h5 class="card-title">{{ series.name }}</h5>
            <h6 class="card-text">{{ series.original_title }}</h6>
            <p class="card-text">
                <span :class="['fi', flagIconClass]"></span>
            </p>
            <p class="card-text">{{ series.vote_average }}</p>
        </div>
    </div>
</template>

<style lang="scss">
@use "../assets/styles/appCard.scss";
</style>


