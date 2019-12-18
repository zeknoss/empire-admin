<template>
    <section class="main-section">
        <b-row>
            <b-col cols="8">
                <b-card title="Line Chart">
                    <div class="widget">
                        <line-chart :chart-data="lineChartData" :height="240" v-if="lineChartData !== null"></line-chart>
                        <footer>
                            <b-row>
                                <b-col v-for="(item,index) in dataSets" :key="item.label">
                                    <chart-legend-item @click.native="switchData(index)" :dataset="item" :delta-percentage="getRandomInt(1) % 2 === 0 || index === 3"></chart-legend-item>
                                </b-col>
                            </b-row>
                        </footer>
                    </div>
                </b-card>
            </b-col>

            <b-col sm="6" lg="4">
                <b-card title="Pie Chart">
                    <div class="widget">
                        <pie-chart :chart-data="pieChartData" :height="300" v-if="pieChartData !== null"></pie-chart>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </section>
</template>

<script>
    import LineChart from "../components/Charts/LineChart";
    import ChartLegendItem from "../components/Charts/ChartLegendItem";
    import PieChart from "../components/Charts/PieChart";

    export default {
        name: "charts",
        components: {PieChart, ChartLegendItem, LineChart},
        mounted () {
            this.fillData();
            this.fillPieData();
        },
        methods: {
            fillData() {
                this.dataSets = [
                    {
                        label: 'Apprehensions',
                        borderColor: "transparent",
                        pointRadius: 3,
                        preset: 'primary',
                        data: [this.getRandomInt(20), this.getRandomInt(10), this.getRandomInt(5), this.getRandomInt(7), this.getRandomInt(9), this.getRandomInt(5), this.getRandomInt(15)]
                    },
                    {
                        label: 'Eliminations',
                        borderColor: "transparent",
                        pointRadius: 3,
                        preset: 'danger',
                        data: [this.getRandomInt(3), this.getRandomInt(8), this.getRandomInt(23), this.getRandomInt(13), this.getRandomInt(32), this.getRandomInt(14), this.getRandomInt(21)]
                    },
                    {
                        label: 'Rebel Scummings',
                        borderColor: "transparent",
                        pointRadius: 3,
                        preset: 'info',
                        data: [this.getRandomInt(6), this.getRandomInt(21), this.getRandomInt(34), this.getRandomInt(3), this.getRandomInt(13), this.getRandomInt(24), this.getRandomInt(11)]
                    },
                    {
                        label: 'Balance in Galaxy',
                        borderColor: "transparent",
                        pointRadius: 3,
                        preset: 'success',
                        data: [this.getRandomInt(0), this.getRandomInt(5), this.getRandomInt(10), this.getRandomInt(15), this.getRandomInt(20), this.getRandomInt(200), this.getRandomInt(200)]
                    }
                ];

                this.lineChartData = {
                    labels: ['January W1', 'January W2', 'January W3', 'January W4', 'February W1', 'February W2', 'February W3'],
                    datasets: [this.dataSets[this.showLineData]]
                };

            },
            fillPieData(){
                this.pieChartData = {
                    datasets: [{
                        data: [this.getRandomInt(20),this.getRandomInt(20),this.getRandomInt(20),this.getRandomInt(20),this.getRandomInt(20)],
                        presets: ['primary','danger','info','success','warning']
                    }],
                    labels: [
                        'Force Lightning',
                        'Force Laugh',
                        'Force Confidence',
                        'Force Senate',
                        'Force Fart'
                    ]
                };
            },
            getRandomInt (min) {
                return Math.floor(Math.random() * (200 - min)) + min
            },
            switchData(key){
                this.showLineData = key;
                this.fillData();
            }
        },
        data() {
            return {
                point: {
                    backgroundColor: 'transparent'
                },
                lineChartData: null,
                pieChartData: null,
                dataSets: [],
                showLineData: 0,
            };
        }
    }
</script>
