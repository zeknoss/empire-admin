<template>
    <section class="main-section">
        <b-card>
            <b-card-body>
                <no-ssr>

                </no-ssr>
            </b-card-body>
            <b-card-footer class="bg-transparent">
                <p>For documentation please visit <a href="https://github.com/CroudTech/vue-fullcalendar#readme" target="_blank">here</a></p>
            </b-card-footer>
        </b-card>
    </section>
</template>

<script>
    export default {
        name: "calendar",
        head () {
            return {
                title: "Calendar"
            }
        },
        data(){
            return {
                config: {
                    themeSystem: 'bootstrap'
                },
                events: [
                    {
                        title  : 'event1',
                        start  : '2010-01-01',
                    },
                    {
                        title  : 'event2',
                        start  : '2010-01-05',
                        end    : '2010-01-07',
                    },
                    {
                        title  : 'event3',
                        start  : '2010-01-09T12:30:00',
                        allDay : false,
                    },
                ]
            }
        }
    }
</script>