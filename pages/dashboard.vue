<template>
    <ea-main-section>
        <b-row>
            <b-col cols="12" md="3">
                <ea-gauge type="success" icon="bell" title="Nerfs<br>Herded" content="23"></ea-gauge>
            </b-col>
            <b-col cols="12" md="3">
                <ea-gauge type="purple" icon="check" title="People Screamed<br>At Same Time" content="Millions"></ea-gauge>
            </b-col>
            <b-col cols="12" md="3">
                <ea-gauge type="info" icon="exclamation-triangle" title="Darths<br>Vaded" content="1"></ea-gauge>
            </b-col>
            <b-col cols="12" md="3">
                <ea-gauge type="warning" icon="exclamation-circle" title="Deathstars<br>Destroyed" content="2"></ea-gauge>
            </b-col>
        </b-row>

        <b-row class="mt-3">
            <b-col md="6" lg="8">
                <chart-1
                    :line-chart-data="lineChartData" :data-sets="dataSets"
                    @fillData="fillData" @switchData="switchData"
                />
            </b-col>
            <b-col md="6" lg="4">
                <b-card>
                    <div slot="header">
                        <h4 class="card-title">Empire Influence</h4>
                        <h6 class="card-subtitle">Political Influence by Planet</h6>
                        <div class="actions">
                            <span class="date-picker-action">{{ new Date() | moment("subtract", "7 days","MMM Do, YYYY") }} - {{ new Date() | moment("MMM Do, YYYY") }}</span>
                        </div>
                    </div>
                    <div class="widget">
                        <div class="progress-item" v-for="(influence,key) in empireInfluence" v-bind:key="key">
                            <header class="clearfix">
                                <div class="float-left">{{ influence[0] }} <small>({{ influence[1] }})</small></div>
                                <div class="float-right">{{ influence[2] }}%</div>
                            </header>
                            <b-progress :max="100">
                                <b-progress-bar :variant="'primary gradient-' + influence[3]" :value="influence[2]"/>
                            </b-progress>
                        </div>
                    </div>
                </b-card>
            </b-col>

            <b-col md="6" lg="8">
                <b-card>
                    <div slot="header">
                        <h4 class="card-title">Order 66 Flow</h4>
                        <h6 class="card-subtitle">Who is killed, who remains at large</h6>

                        <div class="actions">
                            <span class="date-picker-action">{{ new Date() | moment("subtract", "7 days","MMM Do, YYYY") }} - {{ new Date() | moment("MMM Do, YYYY") }}</span>
                            <b-dropdown variant="white btn-circle no-caret" right>
                                <template slot="button-content">
                                    <i class="fa fa-filter"></i>
                                </template>
                                <b-dropdown-header>Actions</b-dropdown-header>
                                <b-dropdown-item>Punch it, Chewie!</b-dropdown-item>
                                <b-dropdown-item>You said it, Chewie...</b-dropdown-item>
                                <b-dropdown-item>Lorem ipsum, chewie</b-dropdown-item>
                            </b-dropdown>
                        </div>
                    </div>

                    <div class="widget" v-bar="{useScrollbarPseudo:true}">
                        <b-table striped responsive hover :items="order66Flow" :fields="order66FlowFields">
                            <template v-slot:cell(status)="data">
                                <b-badge :variant="data.item.statusTheme">{{data.value}}</b-badge>
                            </template>
                            <template v-slot:cell(priority)="data">
                                <span :class="'text-' + data.item.statusTheme">{{data.value}}</span>
                            </template>
                            <template v-slot:cell(actions)="item" class="text-right">
                                <b-dropdown variant="white btn-circle no-caret" right>
                                    <template slot="button-content">
                                        <i class="fas fa-th"></i>
                                    </template>
                                    <b-dropdown-header>Actions</b-dropdown-header>
                                    <b-dropdown-item>Punch it, Chewie!</b-dropdown-item>
                                    <b-dropdown-item>You said it, Chewie...</b-dropdown-item>
                                    <b-dropdown-item>Lorem ipsum, chewie</b-dropdown-item>
                                </b-dropdown>
                            </template>
                        </b-table>
                    </div>
                </b-card>
            </b-col>
            <b-col md="6" lg="4">
                <b-card>
                    <div slot="header">
                        <h4 class="card-title">Darth Sidious Powers</h4>
                        <h6 class="card-subtitle">Emperor's most favourite force powers</h6>
                    </div>
                    <div class="widget">
                        <pie-chart :chart-data="pieChartData" :height="300" v-if="pieChartData !== null"/>
                    </div>
                </b-card>
            </b-col>

            <b-col md="6" lg="8">
                <b-card no-body>
                    <b-tabs pills card vertical>
                        <b-tab title="Today" active>
                            <div class="widget" v-bar="{useScrollbarPseudo: true}">
                                <b-table striped responsive hover :items="order66Flow" :fields="order66FlowFields">
                                    <template v-slot:cell(status)="data">
                                        <b-badge :variant="data.item.statusTheme">{{data.value}}</b-badge>
                                    </template>
                                    <template v-slot:cell(priority)="data">
                                        <span :class="'text-' + data.item.statusTheme">{{data.value}}</span>
                                    </template>
                                    <template v-slot:cell(actions)="data" class="text-right">
                                        <b-dropdown variant="white btn-circle no-caret" right>
                                            <template slot="button-content">
                                                <i class="fas fa-th"></i>
                                            </template>
                                            <b-dropdown-header>Actions</b-dropdown-header>
                                            <b-dropdown-item>Punch it, Chewie!</b-dropdown-item>
                                            <b-dropdown-item>You said it, Chewie...</b-dropdown-item>
                                            <b-dropdown-item>Lorem ipsum, chewie</b-dropdown-item>
                                        </b-dropdown>
                                    </template>
                                </b-table>
                            </div>
                        </b-tab>
                        <b-tab title="This Week">
                            <div class="widget">

                            </div>
                        </b-tab>
                        <b-tab title="This Month">
                            <div class="widget"></div>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </b-col>
            <b-col md="6" lg="4">
                <b-card no-body>
                    <b-tabs pills card>
                        <b-tab active>
                            <template slot="title">Inbox <span class="badge badge-warning">5</span></template>

                            <div class="widget h-tab-widget" v-bar="{useScrollbarPseudo: true}">
                                <ul class="list-unstyled">
                                    <b-media tag="li" class="cursor-pointer mb-3" v-for="message in inbox" :key="message.from">
                                        <img slot="aside" width="64" height="64" :src="message.avatar" :alt="'Message from ' + message.from" class="rounded">

                                        <div class="row">
                                            <div class="col">
                                                <p class="mb-0"><strong>{{ message.from }}</strong></p>
                                                <p class="mb-0">{{ message.message }}</p>
                                                <p class="mb-0" :class="'text-' + message.more.color"><strong>{{ message.more.text }}</strong></p>
                                            </div>
                                            <div class="col-auto">
                                                <b-button variant="warning text-white btn-circle mt-3"><i class="fas fa-envelope"></i></b-button>
                                            </div>
                                        </div>
                                    </b-media>
                                </ul>
                            </div>
                        </b-tab>
                        <b-tab title="Missions">
                            <div class="widget h-tab-widget">

                            </div>
                        </b-tab>
                        <b-tab title="Jedi Training">
                            <div class="widget h-tab-widget"></div>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </b-col>
        </b-row>
    </ea-main-section>
</template>

<script>
import {map} from "lodash";
import ChartLegendItem from "../components/Charts/ChartLegendItem";
import PieChart from "../components/Charts/PieChart";
import Chart1 from "../components/Dashboard/chart-1";
import EaGauge from "../components/Dashboard/EaGauge";

export default {
    components: {
        EaGauge,
        Chart1,
        PieChart,
        ChartLegendItem,
    },
    meta: {
        asd: 123
    },
    middleware: 'auth',
    data() {
        return {
            point: {
                backgroundColor: 'transparent'
            },
            lineChartData: null,
            pieChartData: null,
            dataSets: [],
            empireInfluence: [
                ["Corescant",1873,0,"lime",100],
                ["Degobah",3,0,"pink-purple",24],
                ["Tattooine",48,0,"sunset",8],
                ["Dantooine",10,0,"success",42],
                ["Scarrif",25,0,"peach",66],
                ["Endor",12,0,"sunset",12],
                ["Yonder",9999,0,"success",98],
            ],
            showLineData: 0,

            order66FlowFields: ['target', 'status', 'status', 'lastSeenIn', 'lastSeenWith', 'priority', {
                key: 'actions',
                class: 'text-right'
            }],
            order66Flow: [],

            loading: {
                rebelActivities: false,
                order66flow: false,
                inbox: false,
                sidiousPowers: false,
            },

            inbox: [],
            barTimer: null
        }
    },
    mounted () {
        this.fillData();
        this.timer = setInterval(() => {
            this.empireInfluence.forEach(item => (item[2] = item[4]))
        }, 50);
    },
    methods: {
        async fetchInbox(){
            this.$axios.get('dashboard/inbox')
                .then(response => {
                    let data = response.data.data;
                    map(data, item => {
                        item.avatar = require('../assets/img/avatar/' + item.avatar)
                    });
                    this.inbox = data;
                    this.loading.inbox = false;
                });
        },
        async fetchOrder66(){
            this.$axios.get('dashboard/order66-data')
                .then(response => {
                    this.order66Flow = response.data.data;
                    this.loading.order66flow = false;
                });
        },
        async fetchRebelActivities(){
            return this.$axios.get('dashboard/rebel-activities')
                .then(response => {
                    this.dataSets = response.data.data;
                    this.loading.rebelActivities = false;

                    this.lineChartData = {
                        labels: ['January W1', 'January W2', 'January W3', 'January W4', 'February W1', 'February W2', 'February W3'],
                        datasets: [this.dataSets[this.showLineData]]
                    };
                });
        },
        async fillData() {
            this.loading.order66flow = true;
            this.loading.rebelActivities = true;
            this.loading.inbox = true;
            this.loading.sidiousPowers = true;

            this.fetchOrder66();
            this.fetchInbox();
            await this.fetchRebelActivities();

            this.pieChartData = {
                datasets: [{
                    data: [
                        this.getRandomInt(20),
                        this.getRandomInt(20),
                        this.getRandomInt(20),
                        this.getRandomInt(20),
                        this.getRandomInt(20)
                    ],
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
            this.fetchRebelActivities();
        }
    }
}
</script>
