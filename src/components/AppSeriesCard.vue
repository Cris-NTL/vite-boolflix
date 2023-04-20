<script>
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
            const languageToCountry = {
                af: 'za',
                ar: 'sa',
                bg: 'bg',
                bn: 'bd',
                ca: 'es',
                cs: 'cz',
                cy: 'gb',
                da: 'dk',
                de: 'de',
                el: 'gr',
                en: 'gb',
                es: 'es',
                et: 'ee',
                fa: 'ir',
                fi: 'fi',
                fr: 'fr',
                gu: 'in',
                he: 'il',
                hi: 'in',
                hr: 'hr',
                hu: 'hu',
                id: 'id',
                it: 'it',
                ja: 'jp',
                kn: 'in',
                ko: 'kr',
                lt: 'lt',
                lv: 'lv',
                ml: 'in',
                mr: 'in',
                ms: 'my',
                nl: 'nl',
                no: 'no',
                pa: 'in',
                pl: 'pl',
                pt: 'pt',
                ro: 'ro',
                ru: 'ru',
                sk: 'sk',
                sl: 'si',
                sq: 'al',
                sr: 'rs',
                sv: 'se',
                ta: 'in',
                te: 'in',
                th: 'th',
                tr: 'tr',
                uk: 'ua',
                ur: 'pk',
                vi: 'vn',
                zh: 'cn',
                zu: 'za',
            };
            return languageToCountry[languageCode] || languageCode;
        },
    },
}
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


