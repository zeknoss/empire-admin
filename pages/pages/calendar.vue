<template>
    <main-section header-title="FullCalendar 4" header-subtitle="Easily display your calendar events" header-bg="primary">
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
                <p>For FullCalendar 4 documentation please visit <a href="https://fullcalendar.io/docs" target="_blank">here</a></p>
            </div>
        </b-card>

        <b-modal
            title="Edit Event"
            @ok="saveEvent"
            @cancel="currentEvent=null"
            :visible="currentEvent!==null"
            centered hide-header
        >
            <div v-if="currentEvent">
                <b-form-group label="Event Title">
                    <b-form-input v-model="currentEvent.title" size="lg" />
                </b-form-group>
                <b-form-group label="Status">
                    <b-button v-for="state in eventStates"
                              :variant="state"
                              :key="state"
                              class="btn-circle text-white shadow-none mr-2"
                              @click="currentEvent.state = state"
                    >
                        <i class="fa fa-check" v-if="currentEvent.state.search(state) >= 0"/>
                    </b-button>
                </b-form-group>
            </div>
        </b-modal>
    </main-section>
</template>

<script>
    import MainSection from "../../components/layout-components/MainSection";
    import {findIndex} from "lodash";

    export default {
        name: "calendar",
        components: {
            MainSection,
        },
        methods: {
            /**
             * Advance to the previous date range
             */
            prev(){
                let calendarApi = this.$refs.calendar.$refs.fullCalendar.getApi();
                calendarApi.prev();
            },
            /**
             * Advance to the next date range
             */
            next(){
                let calendarApi = this.$refs.calendar.$refs.fullCalendar.getApi();
                calendarApi.next();
            },

            /**
             * Switches the calendar view between monthly, weekly and daily modes
             */
            switchView(view){
                let calendarApi = this.$refs.calendar.$refs.fullCalendar.getApi();
                calendarApi.changeView(view);
                this.calendarView = view;
            },

            /**
             * Fetches the events from API and assigns the data to events property
             */
            async fetchEvents(){
                return this.$axios.get('calendar/events')
                    .then(response => this.events = response.data.data);
            },

            /**
             * Assigns the chosen event data to the currentEvent property
             */
            editEvent(event){
                this.currentEvent = event;
            },

            /**
             * This method updates the local event which reactively reflects to the FullCalendar component
             */
            saveEvent(){
                let events = JSON.parse(JSON.stringify(this.events)), cId = this.currentEvent.id;
                let eventToUpdate = findIndex(events, item => {return item.id === cId});
                events[eventToUpdate].title = this.currentEvent.title;
                events[eventToUpdate].classNames = 'border-0 bg-' + this.currentEvent.state;
                this.events = events;
                this.currentEvent = null;
            }
        },
        data(){
            return {
                events: [],
                calendarView: 'dayGridMonth',
                currentEvent: null,
                eventStates: [
                    'primary',
                    'success',
                    'warning',
                    'info',
                    'danger',
                    'purple',
                    'lilac',
                ]
            }
        },
        mounted(){
            this.fetchEvents();
        }
    }
</script>
