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
    }
</script>
