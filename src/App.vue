<script>
import axios from 'axios';
import { store } from "./store";
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  methods: {
    async searchMoviesAndSeries(searchInput) {
      const responseMovies = await axios.get(store.apiUrlMovies, {
        params: { api_key: store.api_key, query: searchInput },
      });

      const responseSeries = await axios.get(store.apiUrlSeries, {
        params: { api_key: store.api_key, query: searchInput },
      });

      store.arrayMovies = responseMovies.data.results;
      store.arraySeries = responseSeries.data.results;
    },
  },
};
</script>

<template>
  <AppHeader title="BoolFlix" @search="searchMoviesAndSeries"></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss" scoped>
@use "./assets/styles/general.scss";
</style>