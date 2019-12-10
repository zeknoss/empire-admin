<template>
    <main-section :header-title="'asd'" header-bg="lime">
        <div slot="header-end" class="text-nowrap">
            <b-button variant="primary" @click="prev"><i class="fas fa-angle-left"></i></b-button>
            <b-button variant="primary" @click="next" class="mr-3"><i class="fas fa-angle-right"></i></b-button>
            <b-button variant="primary" :class="calendarView==='dayGridMonth' ? 'active' : ''" @click="switchView('dayGridMonth')">Month</b-button>
            <b-button variant="primary" :class="calendarView==='dayGridWeek' ? 'active' : ''" @click="switchView('dayGridWeek')">Week</b-button>
            <b-button variant="primary" :class="calendarView==='timeGridDay' ? 'active' : ''" @click="switchView('timeGridDay')">Day</b-button>
        </div>
        <b-card footer-bg-variant="white" body-class="px-0 pb-0">
            <empire-calendar
                v-if="events.length > 0"
                :events="events"
                ref="calendar"
                @eventClick="editEvent"
            />
            <div slot="footer">
                <p>For fullcalendar documentation please visit <a href="https://fullcalendar.io/docs" target="_blank">here</a></p>
            </div>
        </b-card>

        <b-modal
            title="Edit Event"
            @ok="currentEvent=null"
            @cancel="currentEvent=null"
            :visible="currentEvent!==null"
        >
            <div v-if="currentEvent">
                <b-form-group label="Event Title">
                    <b-form-input v-model="currentEvent.title" size="lg" />
                </b-form-group>
                <b-form-group label="Event Start">
                    <b-form-input v-model="currentEvent.start" size="lg" type="date" />
                </b-form-group>
                <b-form-group label="Event End">
                    <b-form-input v-model="currentEvent.end" size="lg" type="date" />
                </b-form-group>
            </div>
        </b-modal>
    </main-section>
</template>

<script>
    import MainSection from "../../components/layout-components/MainSection";

    export default {
        name: "calendar",
        components: {
            MainSection,
        },
        methods: {
            prev(){
                let calendarApi = this.$refs.calendar.$refs.fullCalendar.getApi();
                calendarApi.prev();
            },
            next(){
                let calendarApi = this.$refs.calendar.$refs.fullCalendar.getApi();
                calendarApi.next();
            },
            switchView(view){
                let calendarApi = this.$refs.calendar.$refs.fullCalendar.getApi();
                calendarApi.changeView(view);
                this.calendarView = view;
            },
            editEvent(event){
                this.currentEvent = event;
            }
        },
        data(){
            return {
                events: [],
                calendarView: 'dayGridMonth',
                currentEvent: null
            }
        },
        mounted(){
            this.$axios.get('calendar/events')
                .then(response => this.events = response.data.data);
        }
    }
</script>
