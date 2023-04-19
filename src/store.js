import { reactive } from "vue";

export const store = reactive({
    api_key: "bfa02625404f494fc92249458d5ba46f",
    apiUrlMovies: "https://api.themoviedb.org/3/search/movie",
    apiUrlSeries: "https://api.themoviedb.org/3/search/tv",
    apiUrlImg: "https://image.tmdb.org/t/p/w342",
    arrayMovies: [],
    arraySeries: [],
    searchInput: "",
});