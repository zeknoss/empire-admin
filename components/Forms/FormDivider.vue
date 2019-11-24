<template>
    <div class="d-flex mb-4 mt-3">
        <b-badge class="d-block" variant="silver text-muted">{{title}}</b-badge>
        <hr class="my-auto ml-3 w-100">
    </div>
</template>

<script>
    export default {
        name: "FormDivider",
        props: {
            title: String
        },
    }
</script>
