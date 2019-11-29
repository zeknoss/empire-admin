<template>
    <main-section :header-title="'asd'" header-bg="lime">
        <b-card footer-bg-variant="white" body-class="px-0">
            <empire-calendar
                v-if="events.length > 0"
                :events="events"
            ></empire-calendar>
            <div slot="footer">
                <p>For documentation please visit <a href="https://github.com/CroudTech/vue-fullcalendar#readme" target="_blank">here</a></p>
            </div>
        </b-card>
    </main-section>
</template>

<script>
    import MainSection from "../../components/layout-components/MainSection";
    import EmpireCalendar from "../../components/EmpireCalendar";

    export default {
        name: "calendar",
        components: {
            EmpireCalendar,
            MainSection,
        },
        methods: {
        },
        data(){
            return {
                events: []
            }
        },
        mounted(){
            this.$axios.get('calendar/events')
                .then(response => this.events = response.data.data);
        }
    }
</script>
