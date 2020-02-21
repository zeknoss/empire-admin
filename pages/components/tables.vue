<template>
    <ea-main-section></ea-main-section>
</template>

<script>
    import {storeMeta} from "~/helpers/mixins/storeMeta";
    export default {
        name: "tables",
        data() {
            return {

            }
        },
        mixins: [
            storeMeta('Tables','View your datasets in stylish, reusable and easy to manipulate tables')
        ]
    }
</script>
