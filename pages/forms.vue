<template>
    <section class="main-section">
        <b-row>
            <b-col cols="8">
                <b-card title="Basic Components">
                    <b-form-group label="Text Input" for="text-input">
                        <b-form-input id="text-input" name="text-input"></b-form-input>
                    </b-form-group>
                </b-card>
            </b-col>
            <b-col cols="4"></b-col>
        </b-row>
    </section>
</template>

<script>
    import Editor from '@tinymce/tinymce-vue';
    export default {
        name: "Forms",
        components: [
            Editor
        ]
    }
</script>
