export let storeMeta = (title,description) => ({
    mounted(){
        this.$store.commit('setPageTitle',title);
        this.$store.commit('setPageDescription',description);
    },
    destroyed () {
        this.$store.commit('setPageTitle', null);
        this.$store.commit('setPageDescription',process.env.defaultDescription);
    }
});