import Vue from 'vue';

// Layout components
import EaPageHeader from "../components/Layout/EaPageHeader";
import EaSidebar from "../components/Layout/EaSidebar";
import EaMainSection from "../components/Layout/EaMainSection";

// Form components
import EaInputSwitch from "../components/Forms/EaInputSwitch";
import EaFormDivider from "../components/Forms/EaFormDivider";

Vue.component('ea-page-header', EaPageHeader);
Vue.component('ea-sidebar', EaSidebar);
Vue.component('ea-input-switch', EaInputSwitch);
Vue.component('ea-main-section', EaMainSection);
Vue.component('ea-form-divider', EaFormDivider);
