<script>
import { Line } from 'vue-chartjs';

export default {
    extends: Line,
    name: "line-chart",
    props: {
        chartData: {
            required: true,
            default: {}
        }
    },
    data() {
        return {
            gradients: {},
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display:false,
                    labels: {
                    }
                },
                lineTension: .4,
                scales: {
                    yAxes: [
                        {
                            display: false,
                            ticks: { beginAtZero:true }
                        }
                    ],
                    xAxes: [
                        {
                            ticks:{
                                fontColor: '#929292',
                                fontSize: 11
                            }
                        }
                    ]
                }
            },
            gradientsGen: false
        }
    },
    methods: {
        createGradientBg(colorStart,colorEnd){
            let gradient = this.$refs.canvas.getContext('2d').createLinearGradient(500,0,100,0);
            gradient.addColorStop(0,colorStart);
            gradient.addColorStop(1,colorEnd);

            return gradient;
        },
        generateGradients(){
            this.gradients.primary = this.createGradientBg('rgba(39,137,180,0.7)','rgba(24,66,164,0.7)');
            this.gradients.warning = this.createGradientBg('rgba(238,252,137,0.7)','rgba(224,166,100,0.7)');
            this.gradients.info = this.createGradientBg('rgba(252,137,214,0.7)','rgba(162,100,224,0.7)');
            this.gradients.danger = this.createGradientBg('rgba(255,72,249,0.7)','rgba(224,100,100,0.7)');
            this.gradients.success = this.createGradientBg('rgba(137,252,248,0.7)','rgba(104,100,224,0.7)');
        },
        renderMounted(){
            if(!this.gradientsGen)
                this.generateGradients();

            if(this.chartData.datasets){
                for(let i=0;i<this.chartData.datasets.length;i++){
                    if(this.chartData.datasets[i].preset && this.gradients[this.chartData.datasets[i].preset])
                        this.chartData.datasets[i].backgroundColor = this.gradients[this.chartData.datasets[i].preset];
                }
            }

            this.renderChart(this.chartData, this.chartOptions);
        }
    },
    watch: {
        chartData(newData,oldData){
            if(oldData !== null && typeof newData === 'object')
                this.renderMounted();
        }
    },
    mounted () {
        this.renderMounted();
    }
}
</script>
