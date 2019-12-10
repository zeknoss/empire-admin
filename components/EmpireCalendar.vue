<template>
    <full-calendar
        v-if="events.length > 0"
        default-view="dayGridMonth"
        :plugins="calendarPlugins"
        :events="events"
        :editable="true"
        theme-system="bootstrap"
        @eventClick="editEvent"
        :header="header"
        ref="fullCalendar"
    />
</template>

<script>
    import FullCalendar from '@fullcalendar/vue';
    import dayGridPlugin from '@fullcalendar/daygrid';
    import list from '@fullcalendar/list';
    import timeGridPlugin from '@fullcalendar/timegrid';
    import interactionPlugin from '@fullcalendar/interaction';

    export default {
        name: "EmpireCalendar",
        components: {FullCalendar},
        props: {
            events: Array,
        },
        methods: {
            editEvent(event){
                let start = event.event.start, end = event.event.end;
                this.$emit('eventClick', {
                    id: event.event.id,
                    title: event.event.title,
                    start: start.toISOString().slice(0,10),
                    end: end.toISOString().slice(0,10),
                });
            }
        },
        data(){
            return {
                calendarPlugins: [
                    dayGridPlugin,
                    timeGridPlugin,
                    list,
                    interactionPlugin
                ],
                header: {
                    right: ''
                }
            }
        },
    }
</script>
