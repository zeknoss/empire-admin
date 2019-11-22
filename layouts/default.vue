<template>
    <div class="app-container" :class="[$store.state.sidebarVisible ? 'menu-active' : null]">

        <sidebar/>

        <section class="main-content">
            <PageHeader/>
            <div class="container-fluid">
                <nuxt/>
            </div>
        </section>

        <client-only>
            <vue-snotify></vue-snotify>
        </client-only>
    </div>
</template>

<script>
    import Sidebar from '~/components/layout-components/Sidebar';
    import PageHeader from '~/components/layout-components/PageHeader';

    export default {
        "name": "Dashboard",
        components: {
            PageHeader,
            Sidebar
        },
        middleware: 'head',
        methods: {},
        watch: {
            $route () {
                this.$snotify.clear();
            }
        }
    }
</script>
