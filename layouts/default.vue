<template>
    <div class="app-container" :class="[$store.state.sidebarVisible ? 'menu-active' : null]">
        <ea-sidebar/>

        <section class="main-content">
            <ea-page-header/>
            <nuxt/>
        </section>

        <client-only>
            <vue-snotify/>
        </client-only>
    </div>
</template>

<script>
    export default {
        "name": "Dashboard",
        middleware: 'head',
        methods: {},
        watch: {
            $route () {
                this.$snotify.clear();
            }
        }
    }
</script>
