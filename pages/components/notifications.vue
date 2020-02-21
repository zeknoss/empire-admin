<template>
    <ea-main-section>
        <b-alert show variant="silver">
            <h4 class="alert-heading">About Notifications System</h4>
            <p>The notifications system relies on Snotify package (vue-snotify), you can find a very detailed documentation regarding the component in the package documentation</p>
            <a href="https://artemsky.github.io/vue-snotify/documentation/" target="_blank" class="btn btn-primary">Snotify Documentation <i class="fas fa-external-link-alt"></i></a>
        </b-alert>
        <b-row>
            <b-col cols="4">
                <b-card title="Basic Notifications">
                    <b-button variant="primary" @click="basicNotification('Default notification','Here is the message body of the notification (optional)', 'simple')">Basic</b-button>
                    <b-button variant="info" @click="basicNotification('Info notification','Here is the message body of the notification (optional)', 'info')">Info</b-button>
                    <b-button variant="success" @click="basicNotification('Success notification','Here is the message body of the notification (optional)', 'success')">Success</b-button>
                    <b-button variant="warning" @click="basicNotification('Warning notification','Here is the message body of the notification (optional)', 'warning')">Warning</b-button>
                    <b-button variant="danger" @click="basicNotification('Error notification','Here is the message body of the notification (optional)', 'error')">Error</b-button>
                </b-card>
                <b-card title="HTML Notifications">
                    <b-button variant="primary" block @click="htmlNotification">Show HTML Notification</b-button>
                    <p class="mt-2">The notification will show the following HTML content</p>
                    <pre>
&lt;h4&gt;Dear {{ $auth.user.name.first_name }},&lt;/h4&gt;<br>
&lt;p&gt;While you read this letter, I will be far, far away writing code for the Sail Admin.&lt;/p&gt;<br>
&lt;p&gt;Hope you find this admin template helpful and enjoy it on your new and upcoming projects.&lt;/p&gt;<br>
&lt;p&gt;&lt;em&gt;Your friend in time, Doc 1pxUp&lt;em&gt;&lt;/p&gt;
                    </pre>
                </b-card>
            </b-col>

            <b-col cols="4">
                <b-card title="Prompts" sub-title="Prompt users with actionable buttons">
                    <b-form-group label="Prompt Text" for="prompt-question">
                        <b-form-input id="prompt-question" name="prompt-question" v-model="prompt.question"/>
                    </b-form-group>
                    <b-row>
                        <b-col>
                            <b-form-group label="Accept Button Text" for="prompt-yes">
                                <b-form-input id="prompt-yes" name="prompt-yes" v-model="prompt.yes"/>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group label="Decline Button Text" for="prompt-no">
                                <b-form-input id="prompt-no" name="prompt-no" v-model="prompt.no"/>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-form-group label="Answer Input Placeholder Text" for="prompt-placeholder">
                        <b-form-input id="prompt-placeholder" name="prompt-placeholder" v-model="prompt.placeholder"/>
                    </b-form-group>
                    <b-button variant="primary" block @click="promptNotification">Show Prompt</b-button>
                </b-card>

                <b-card title="Confirmations" sub-title="Ask the Users for Confirmation">
                    <b-form-group label="Confirm Text" for="confirm-question">
                        <b-form-input id="confirm-question" name="confirm-question" v-model="confirm.question"/>
                    </b-form-group>
                    <b-button variant="success" block @click="confirmNotification">Show Confirmation</b-button>
                </b-card>
            </b-col>

            <b-col cols="4">
                <b-card title="Global Notification Options" sub-title="Set properties to see all probable combinations">
                    <b-form-group label="Position">
                        <b-dropdown :text="notificationPositions[notificationOptions.position]" variant="primary">
                            <b-dropdown-item v-for="(title, pos) in notificationPositions" :key="pos" :active="notificationOptions.position == pos" @click="notificationOptions.position = pos">{{title}}</b-dropdown-item>
                        </b-dropdown>
                    </b-form-group>

                    <b-form-group>
                        <ea-input-switch :status.sync="notificationOptions.showProgressBar" name="progbar"
                                         variant="purple" label="Show Progress Bar?"/>
                    </b-form-group>

                    <b-form-group>
                        <ea-input-switch :status.sync="notificationOptions.pauseOnHover" name="pauseonh"
                                         variant="primary" label="Pause on Hover?"/>
                    </b-form-group>

                    <b-form-group>
                        <ea-input-switch :status.sync="notificationOptions.closeOnClick" name="closeonclick"
                                         variant="warning" label="Close on Click?"/>
                    </b-form-group>

                    <b-form-group :label="'Timeout (' + notificationOptions.timeout + 'ms)'">
                        <input type="range" v-model="notificationOptions.timeout" step="1000" max="10000" class="range-info">
                    </b-form-group>

                    <b-button variant="default" @click="clearAll" block>Clear All</b-button>
                </b-card>
            </b-col>
        </b-row>
    </ea-main-section>
</template>

<script>
import {storeMeta} from "~/helpers/mixins/storeMeta";

export default {
    name: "Notifications",
    data() {
        return {
            notificationOptions: {
                timeout: 0,
                position: 'rightBottom',
                showProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
            },
            notificationPositions: {
                "leftTop": "Left - Top",
                "leftCenter": "Left - Center",
                "leftBottom": "Left - Bottom",
                "rightTop": "Right - Top",
                "rightCenter": "Right - Center",
                "rightBottom": "Right - Bottom",
                "centerTop": "Center - Top",
                "centerCenter": "Center - Center",
                "centerBottom": "Center - Bottom",
            },
            prompt: {
                question: 'What kind of tamale do you like?',
                placeholder: 'Say \'hot one\' and enter',
                yes: 'Aye',
                no: 'Meh'
            },
            confirm: {
                question: 'Doc, you made a time machine, out of a Delorean?!?',
            }
        }
    },
    methods: {
        clearAll(){
            this.$snotify.clear()
        },
        basicNotification(title, body, type){
            switch(type){
                case 'warning':
                    this.$snotify.warning(body, title, this.notificationOptions);
                    break;
                case 'success':
                    this.$snotify.success(body, title, this.notificationOptions);
                    break;
                case 'error':
                    this.$snotify.error(body, title, this.notificationOptions);
                    break;
                case 'info':
                    this.$snotify.info(body, title, this.notificationOptions);
                    break;
                case 'simple':
                default:
                    this.$snotify.simple(body, title, this.notificationOptions);
            }
        },
        htmlNotification(){
            this.$snotify.html('<div class="snotifyToast__body"><h4 class="text-warning">Dear Luke,</h4>\n' +
                '<p>While you read this letter, I will be far, far away writing code for the Sail Admin.</p>\n' +
                '<p>Hope you find this admin template helpful and enjoy it on your new and upcoming projects.</p>\n' +
                '<p><em>Your friend in time, Doc 1pxUp</em></p></div>');
        },
        promptNotification(){
            const yesAction = (toast) => {
                if (!toast.value.match('hot one')) {
                    toast.valid = false;
                    alert('You answered poorly');
                    return false;
                } else {
                    toast.valid = true;
                    alert('You answered wisely');
                    this.$snotify.remove(toast.id)
                }
            };

            const noAction = (toast) => {
                this.$snotify.remove(toast.id);
                alert('You refused to give an answer');
            };

            let options = this.notificationOptions;
            options.buttons = [
                {text: this.prompt.yes, action: yesAction, bold: true },
                {text: this.prompt.no, action: noAction },
            ];
            options.placeholder = this.prompt.placeholder;
            this.$snotify.prompt(this.prompt.question, null, options);
        },
        confirmNotification(){
            const yesAction = (toast) => {
                alert('YAY!');
                this.$snotify.remove(toast.id);
            };

            const noAction = (toast) => {
                alert('A\'ight then');
                this.$snotify.remove(toast.id);
            };

            let options = this.notificationOptions;
            options.buttons = [
                {text: 'Yes, Marty', action: yesAction, bold: true },
                {text: 'No, Marty', action: noAction },
            ];
            this.$snotify.confirm(this.confirm.question,null, options);
        }
    },
    mixins: [
        storeMeta('Notifications','Notify or prompt or confirm the users about events')
    ]
}
</script>
