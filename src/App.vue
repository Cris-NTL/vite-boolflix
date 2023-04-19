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
  data() {
    return {
      api_key: "bfa02625404f494fc92249458d5ba46f",
      apiUrlMovies: "https://api.themoviedb.org/3/search/movie",
      apiUrlSeries: "https://api.themoviedb.org/3/search/tv",
    }
  }
}

</script>

<template>
  <AppHeader title="BoolFlix"></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss">
@use './assets/styles/general.scss';
</style>
