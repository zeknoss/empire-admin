<template>
    <div>
        <nuxt/>

        <client-only>
            <vue-snotify></vue-snotify>
        </client-only>
    </div>
</template>

<script>
    export default {
        name: "fourOhOne",
        async mounted() {
            await this.$store.dispatch('auth/restoreToken');
            if(this.$store.getters['auth/token'] !== null && !this.$store.getters['auth/getLogin']){
                try{
                    await this.$store.dispatch('auth/fetchUser');
                }catch (e) {

                }
                this.$router.push({
                    path: '/dashboard'
                });
            }
        }
    }
</script>
