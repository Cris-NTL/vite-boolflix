<script>
export default {
    name: 'AppSeriesCard',
    props: {
        series: Object,
    },

}
</script>

<template>
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w342${series.poster_path}`" class="card-img-top" alt="Series poster" />
        <div class="card-body">
            <h5 class="card-title">{{ series.name }}</h5>
            <p class="card-text">{{ series.original_title }}</p>
            <p class="card-text">{{ series.original_language }}</p>
            <span class="fi fi-gr"></span> <span class="fi fi-gr fis"></span>
            <p class="card-text">{{ series.vote_average }}</p>
        </div>
    </div>
</template>

<style lang="scss">
@use "../assets/styles/appCard.scss";
</style>


