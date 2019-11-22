<script>
import { Pie } from 'vue-chartjs';
export default {
    extends: Pie,
    name: "pie-chart",
    props: {
        chartData: {},
        legendBreakPoint: {
            type: Number,
            default: 1900
        }
    },
    data() {
        return {
            gradients: {},
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'left',
                    labels: {
                        fontColor: '#929292',
                        fontSize: 11,
                        fontStyle: 'bold',
                        boxWidth: 11,
                        padding:20
                    }
                },
                layout: {
                    padding:0
                }
            },
            gradientsGen: false,
            window: {
                width: 0,
                height: 0
            }
        }
    },
    methods: {
        createGradientBg(colorStart,colorEnd){
            let gradient = this.$refs.canvas.getContext('2d').createRadialGradient(0,0,0,100,100,250);
            gradient.addColorStop(0,colorStart);
            gradient.addColorStop(1,colorEnd);

            return gradient;
        },
        generateGradients(){
            this.gradients.primary = this.createGradientBg('rgba(39,137,180,1)','rgba(24,66,164,1)');
            this.gradients.warning = this.createGradientBg('rgba(238,252,137,1)','rgba(224,166,100,1)');
            this.gradients.info = this.createGradientBg('rgba(252,137,214,1)','rgba(162,100,224,1)');
            this.gradients.danger = this.createGradientBg('rgba(255,72,249,1)','rgba(224,100,100,1)');
            this.gradients.success = this.createGradientBg('rgba(137,252,248,1)','rgba(104,100,224,1)');
        },
        renderMounted(){
            if(!this.gradientsGen)
                this.generateGradients();

            if(this.chartData.datasets){
                for(let d=0;d<this.chartData.datasets.length;d++){
                    this.chartData.datasets[d].backgroundColor = [];
                    for(let i=0;i<this.chartData.datasets[d].presets.length;i++) {
                        this.chartData.datasets[d].backgroundColor[i] = this.gradients[this.chartData.datasets[d].presets[i]];
                    }
                }
            }

            this.renderChart(this.chartData, this.chartOptions);
        },
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;

            let old = this.chartOptions.legend.position;
            this.chartOptions.legend.position = (this.window.width <= this.legendBreakPoint) ? 'bottom' : 'left';

            if(old !== this.chartOptions.legend.position && old > 0) this.renderMounted();
        }
    },
    watch: {
        chartData(newData,oldData){
            if(oldData !== null && typeof newData === 'object')
                this.renderMounted();
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    mounted () {
        this.renderMounted();
    }
}
</script>