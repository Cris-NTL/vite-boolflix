<script>
import { store } from '../store';

export default {
    name: 'AppSeriesCard',
    data() {
        return {
            showDetails: false,
        };
    },
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
        isStarFilled(index) {
            const adjustedRating = this.series.vote_average / 2;
            const roundedRating = Math.ceil(adjustedRating);
            return index < roundedRating;
        },
    },
};
</script>

<template>
    <div class="series-card mx-1" @click="showDetails = !showDetails">
        <div v-if="!showDetails">
            <img :src="`https://image.tmdb.org/t/p/w342${series.poster_path}`" class="card-img-top h-100"
                alt="Series poster" />
        </div>

        <div class="card-body p-1" v-else>
            <h5 class="card-title mb-2">Title: {{ series.name }}</h5>
            <h6 class="card-text mb-2">Original Title: {{ series.original_name }}</h6>
            <div class="card-text mb-2">
                <span :class="['fi', flagIconClass]"></span>
            </div>
            <div class="card-text mb-2">
                <span>Rating:</span><br>
                <i v-for="index in 5" :key="`star-${index}`"
                    :class="isStarFilled(index - 1) ? 'fas fa-star' : 'fa fa-star'"></i>
            </div>
            <div class="card-text">
                <span>Overview: <br> {{ series.overview }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../assets/styles/appCard.scss";
</style>
