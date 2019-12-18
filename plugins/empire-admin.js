import Vue from 'vue';

// Layout components
import EmPageHeader from "../components/Layout/EmPageHeader";
import EmSidebar from "../components/Layout/EmSidebar";
import MainSection from "../components/Layout/MainSection";

// Form components
import EaInputSwitch from "../components/Forms/EaInputSwitch";

Vue.component('ea-page-header', EmPageHeader);
Vue.component('ea-sidebar', EmSidebar);
Vue.component('ea-input-switch', EaInputSwitch);
Vue.component('main-section', MainSection);
