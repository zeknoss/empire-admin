<template>
    <b-card>
        <div slot="header">
            <h4 class="card-title">Rebel Activities</h4>
            <h6 class="card-subtitle">Rebel nuisance by date</h6>

            <div class="actions">
                <span class="date-picker-action">
                    {{ new Date() | moment("subtract", "7 days","MMM Do, YYYY") }} - {{ new Date() | moment("MMM Do, YYYY") }}
                </span>
                <b-dropdown variant="white btn-circle no-caret" right>
                    <template slot="button-content">
                        <i class="fas fa-filter"></i>
                    </template>
                    <b-dropdown-header>Actions</b-dropdown-header>
                    <b-dropdown-item>This Week</b-dropdown-item>
                    <b-dropdown-item>Last Week</b-dropdown-item>
                    <b-dropdown-item>This Month</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item @click="$emit('fillData')">Randomize Data</b-dropdown-item>
                </b-dropdown>
            </div>
        </div>

        <div class="widget">
            <line-chart :chart-data="lineChartData" :height="240" v-if="lineChartData !== null"></line-chart>
            <footer>
                <b-row>
                    <b-col v-for="(item,index) in dataSets" :key="item.label" cols="6" md="3">
                        <chart-legend-item
                            @click.native="$emit('switchData',index)"
                            :dataset="item"
                            :delta-percentage="getRandomInt(1) % 2 === 0 || index === 3"
                        ></chart-legend-item>
                    </b-col>
                </b-row>
            </footer>
        </div>
    </b-card>
</template>

<script>
    import LineChart from "../Charts/LineChart";
    import ChartLegendItem from "../Charts/ChartLegendItem";
    export default {
        name: "chart-1",
        components: {ChartLegendItem, LineChart},
        props: {
            lineChartData: {
                type: Object
            },
            dataSets: {
                type: Array
            },
        },
        methods: {
            getRandomInt (min) {
                return Math.floor(Math.random() * (200 - min)) + min
            },
        }
    }
</script>
