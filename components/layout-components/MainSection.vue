<template>
    <section class="main-section" :class="sectionClass">
        <header v-if="headerValid" :class="'gradient-' + headerBg">
            <div class="h1">
                <span v-html="headerTitle"></span>
                <small class="small font-weight-light d-block" v-html="headerSubtitle"></small>
            </div>
            <slot name="header-end"></slot>
        </header>
        <slot></slot>
    </section>
</template>

<script>
    export default {
        name: "MainSection",
        props: {
            mode: {
                default: 'fluid'
            },
            headerTitle: {
                default: ''
            },
            headerSubtitle: {
                default: ''
            },
            headerBg: {
                default: 'primary'
            }
        },
        computed: {
            sectionClass(){
                return [
                    this.headerValid ? 'showcase-primary' : '',
                    this.mode === 'fluid' ? 'container-fluid' : 'container'
                ]
            },
            headerValid(){
                return this.headerTitle !== null && this.headerTitle !== ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .showcase-primary {
        position:relative;
        padding-top:150px;

        > header {
            z-index:0;
            position:absolute;
            left:-15px;
            right:0;
            top:0;
            height:200px;
            color:#fff;
            padding: 30px;
            box-sizing: border-box;

            display:flex;

            .h1 {
                flex-basis: 100%;
            }
        }
    }
</style>
