<template>
    <button type="button" class="chart-legend-item">
        <div class="d-flex pb-2">
            <span class="btn btn-circle btn-white btn-lg" :class="color"><i :class="'fas fa-' + icon"></i></span>
            <div class="legend-title d-inline-block pt-2 ml-2"><div class="text-nowrap text-truncate">{{ dataset.label }}</div><span>{{ showDiff }}</span></div>
        </div>
    </button>
</template>

<script>
    export default {
        name: "chart-legend-item",
        props: ['dataset','deltaPercentage'],
        data: () => ({
            last: null,
            oneBeforeLast: null
        }),
        computed: {
            icon(){
                if(this.last > this.oneBeforeLast)
                    return 'chart-line';
                if(this.last < this.oneBeforeLast)
                    return 'angle-double-down';
                return 'balance-scale';
            },
            color(){
                if(this.last > this.oneBeforeLast)
                    return 'text-success';
                if(this.last < this.oneBeforeLast)
                    return 'text-danger';
                return 'text-info';
            },
            showDiff(){
                let diff = null;
                if(this.deltaPercentage){
                    diff = Math.ceil((this.oneBeforeLast-this.last) / this.oneBeforeLast * 100) + '%';
                    if(this.last < this.oneBeforeLast) diff = '-' + this.last;
                }else{
                    diff = this.last - this.oneBeforeLast;
                    if(diff > 0) diff = '+' + diff;
                }
                return diff;
            }
        },
        mounted(){
            this.last = (this.dataset.data[(this.dataset.data.length-1)]);
            this.oneBeforeLast = (this.dataset.data[(this.dataset.data.length-2)]);
        }
    }
</script>