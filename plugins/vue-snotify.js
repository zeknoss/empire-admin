import Vue from 'vue';
import Snotify from 'vue-snotify';

Vue.use(Snotify, {
    toast: {
        icon: false,
        titleMaxLength: 32
    }
});