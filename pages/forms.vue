<template>
    <main-section>
        <b-row>
            <b-col cols="12" md="4">
                <b-card title="Basic Components" sub-title="Various HTML inputs">
                    <b-form-group label="Text Input" for="text-input">
                        <b-form-input id="text-input" name="text-input"/>
                    </b-form-group>
                    <b-form-group label="E-mail Input" for="email-input">
                        <b-form-input type="email" id="email-input" name="email-input"/>
                    </b-form-group>
                    <b-form-group label="Password Input" for="password-input">
                        <b-form-input type="password" id="password-input" name="password-input"/>
                    </b-form-group>
                    <b-form-group label="Number Input" for="number-input">
                        <b-form-input type="number" id="number-input" name="number-input"/>
                    </b-form-group>
                    <b-form-group label="URL Input" for="url-input">
                        <b-form-input type="url" id="url-input" name="url-input" value="https://burakgurbuz.com"/>
                    </b-form-group>
                    <b-form-group label="Date Input" for="date-input">
                        <b-form-input type="date" id="date-input" name="date-input"/>
                    </b-form-group>
                    <b-form-group label="Datetime Input" for="datetime-input">
                        <b-form-input type="datetime-local" id="datetime-input" name="datetime-input" :value="(new Date()).toISOString()"/>
                    </b-form-group>
                    <b-form-group label="Month Input" for="month-input">
                        <b-form-input type="month" id="month-input" name="month-input"/>
                    </b-form-group>
                    <b-form-group label="Textarea" for="textarea">
                        <b-form-textarea id="textarea" name="textarea" />
                    </b-form-group>
                    <div slot="footer" class="text-right">
                        <b-btn size="xl" variant="primary">Submit</b-btn>
                    </div>
                </b-card>
                <b-card title="Form Input Sizes">
                    <b-form-group label="Default Size" for="text-input-def">
                        <b-form-input id="text-input-def" name="text-input"/>
                    </b-form-group>
                    <b-form-group label="Large" for="text-input-lg">
                        <b-form-input id="text-input-lg" name="text-input" size="lg"/>
                    </b-form-group>
                    <b-form-group label="Small" for="text-input-sm">
                        <b-form-input id="text-input-sm" name="text-input" size="sm"/>
                    </b-form-group>
                </b-card>
            </b-col>
            <b-col cols="12" md="8">
                <b-card title="Rich-text Editor" sub-title="WYSIWYG with TinyMCE">
                    <editor
                        api-key="no-api-key"
                        v-model="textareaData"
                        :init="{height: 500}"
                    />
                    <div slot="footer">
                        <p>For TinyMCE documentation please visit <a href="https://www.tiny.cloud/docs/integrations/vue/" target="_blank">here</a></p>
                    </div>
                </b-card>

                <b-card title="Custom Components">
                    <b-row>
                        <b-col cols="12" md="4">
                            <h6>Input Groups</h6>
                            <b-form-group label="Text input with prepend">
                                <b-input-group size="lg">
                                    <b-input-group-prepend is-text>
                                        <i class="fas fa-envelope"/>
                                    </b-input-group-prepend>
                                    <b-form-input placeholder="Text input with prepend"/>
                                </b-input-group>
                            </b-form-group>
                            <b-form-group label="Text input with append">
                                <b-input-group size="lg">
                                    <b-form-input placeholder="Text input with append"/>
                                    <b-input-group-append is-text>
                                        <i class="fas fa-warehouse"/>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                            <b-form-group label="Now everybody together!">
                                <b-input-group size="lg">
                                    <b-input-group-prepend is-text>🤜</b-input-group-prepend>
                                    <b-form-input placeholder="Broforce!"/>
                                    <b-input-group-append is-text>🤛</b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                            <b-form-group label="With buttons and props">
                                <b-input-group prepend="Username">
                                    <b-form-input size="lg"/>
                                    <b-input-group-append>
                                        <b-button variant="outline-info">Button</b-button>
                                        <b-button variant="info">Button</b-button>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <h6>Ranges and Sliders</h6>
                            <b-form-group v-for="scheme in colorSchemes" :key="scheme" :label="scheme">
                                <input type="range" step="1000" max="10000" :class="'range-' + scheme.toLowerCase()">
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <h6>Toggles</h6>
                            <b-form-group v-for="scheme in colorSchemes" :key="scheme" :label="scheme">
                                <ea-input-switch
                                    :name="'toggle-' + scheme"
                                    :variant="scheme.toLowerCase()"
                                    :label="scheme + ' Toggle'"
                                    :status.sync="toggle"
                                />
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <template slot="footer">
                        <b-row>
                            <b-col cols="12" md="4">
                                <a href="https://bootstrap-vue.js.org/docs/components/input-group" target="_blank">
                                    Click for documentation <i class="fas fa-angle-up"></i>
                                </a>
                            </b-col>
                            <b-col cols="12" md="4">
                                <a href="https://bootstrap-vue.js.org/docs/components/input-group" target="_blank">
                                    Click for documentation <i class="fas fa-angle-up"></i>
                                </a>
                            </b-col>
                            <b-col cols="12" md="4">
                                <a href="https://bootstrap-vue.js.org/docs/components/input-group" target="_blank">
                                    Click for documentation <i class="fas fa-angle-up"></i>
                                </a>
                            </b-col>
                        </b-row>
                    </template>
                </b-card>
            </b-col>
        </b-row>
    </main-section>
</template>

<script>
    import Editor from '@tinymce/tinymce-vue';
    export default {
        name: "Forms",
        components: {
            Editor
        },
        data(){
            return {
                toggle: true,
                colorSchemes: ['Primary','Warning','Info','Danger','Success','Purple'],
                textareaData: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
        }
    }
</script>
