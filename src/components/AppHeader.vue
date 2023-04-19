<script>
import { store } from '../store';

export default {
    name: "AppHeader",
    emits: ['search'],
    props: {
        title: String
    },
    computed: {
        searchInput: {
            get() {
                return store.searchInput;
            },
            set(value) {
                store.searchInput = value;
            }
        }
    }
}
</script>

<template>
    <header class="w-100 p-3 d-flex align-items-center justify-content-between">
        <div>
            <h2>{{ title }}</h2>
        </div>

        <div class="">
            <input class="mx-3 p-1" type="text" placeholder="Search..." v-model.trim="searchInput"
                @keyup.enter="$emit('search', searchInput)" />
            <button class="btn btn-warning px-5" @click="$emit('search', searchInput)">Click</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../assets/styles/appHeader.scss";
</style>
