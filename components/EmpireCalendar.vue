<template>
    <client-only>
        <full-calendar
            v-if="events.length > 0"
            default-view="dayGridMonth"
            :plugins="calendarPlugins"
            :events="events"
        ></full-calendar>
    </client-only>
</template>

<script>
    import FullCalendar from '@fullcalendar/vue';
    import dayGridPlugin from '@fullcalendar/daygrid';

    export default {
        name: "EmpireCalendar",
        components: {FullCalendar},
        props: {
            events: Array,
        },
        data(){
            return {
                calendarPlugins: [
                    dayGridPlugin,
                ],
                config: {
                    themeSystem: 'bootstrap'
                },
            }
        },
    }
</script>
