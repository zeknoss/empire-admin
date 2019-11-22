<template>
    <section class="main-section showcase-primary">
        <b-row>
            <b-col md="6" lg="4">
                <b-card header-bg-variant="primary">
                    <div slot="header">
                        <h4 class="card-title text-white">Empire Influence</h4>
                        <h6 class="card-subtitle text-white">Political Influence by Planet</h6>
                        <div class="actions text-white">
                            <span class="date-picker-action">{{ new Date() | moment("subtract", "7 days","MMM Do, YYYY") }} - {{ new Date() | moment("MMM Do, YYYY") }}</span>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col md="6" lg="4">
                <b-card header-bg-variant="success">
                    <div slot="header">
                        <h4 class="card-title text-white">Empire Influence</h4>
                        <h6 class="card-subtitle text-white">Political Influence by Planet</h6>
                        <div class="actions text-white">
                            <span class="date-picker-action">{{ new Date() | moment("subtract", "7 days","MMM Do, YYYY") }} - {{ new Date() | moment("MMM Do, YYYY") }}</span>
                        </div>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </section>
</template>

<script>
    export default {
        name: "my-profile"
    }
</script>

<style lang="scss">
    .showcase-primary {
        position:relative;
        padding-top:150px;

        &:before {
            background:linear-gradient(180deg, rgba(47, 124, 182, 0.91), rgba(33, 75, 167, 0.91));
            content:"";
            z-index:0;
            position:absolute;
            left:-30px;
            right:0;
            top:0;
            height:200px;
        }
    }
</style>
