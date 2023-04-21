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
        <div class="d-flex">
            <h2 class="m-0">{{ title }}</h2>

            <ul class="categories m-0 d-flex align-items-center gap-4">
                <li>HOME</li>
                <li>TV SERIES</li>
                <li>MOVIES</li>
                <li>ORIGINALS</li>
                <li>RECENTLY UPDATED</li>
                <li>MY LIST</li>
            </ul>

        </div>

        <div class="d-flex align-items-center">
            <input class="mx-3 p-1" type="text" placeholder="Search..." v-model.trim="searchInput" @keyup.enter="{
                $emit('search', searchInput);
                            searchInput = '';
            }" />
            <button id="btn" class="btn px-5" @click="{
                $emit('search', searchInput);
                            searchInput = '';
            }">
                Click
            </button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../assets/styles/appHeader.scss";
</style>
