<template>
    <div class="gauge" :class="'gauge-' + type">
        <div class="row no-gutters align-middle">
            <div class="col col-icon d-flex align-middle">
                <i class="fas" :class="'fa-fw fa-' + icon"></i>
            </div>
            <div class="col ml-2 d-flex">
                <div class="my-auto">
                    <h5 v-html="title"></h5>
                    <slot name="content">
                        <h4 class="align-middle" v-html="content"></h4>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EaGauge",
        props: [
            'type',
            'icon',
            'title',
            'content'
        ]
    }
</script>
