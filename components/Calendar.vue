<template>
    <div class="empire-calendar">

    </div>
</template>

<script>
    // https://gist.github.com/guillaumepiot/ebd2420a5e5e8d2d5add
    export default {
        name: "Calendar",
        props: {
            'events': Array,
            'options': Object
        },
        data(){
            return {
                mode: 'maximized',
                currentView: 'month',
                selectedDate: null,
            }
        },
        methods: {
            switchView(view){
                this.currentView = view;
            },
            prev(){
                this.selectedDate.subtract(1,this.currentView);
            },
            next(){
                this.selectedDate.add(1,this.currentView);
            },
            selectDate(){}
        },
        mounted() {
            this.selectedDate = new moment();
        }
    }
</script>