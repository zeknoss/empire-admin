<template>
    <div class="container">
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>An error occured</h1>
        <p v-html="error.message"></p>
        <nuxt-link to="/">Home page</nuxt-link>

        <client-only>
            <vue-snotify></vue-snotify>
        </client-only>
    </div>
</template>

<script>
    export default {
        props: {
            error: {
                type: Object,
                default: null
            }
        }
    }
</script>
