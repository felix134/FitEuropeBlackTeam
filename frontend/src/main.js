import Vue from 'vue'
import App from './App.vue'
import router from "./routes";

import BootstrapVue from "bootstrap-vue"
import VueSimpleAlert from "vue-simple-alert";
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faAngleRight,
    faArchive,
    faArrowLeft,
    faChalkboardTeacher,
    faCheck,
    faChild,
    faCircle,
    faCoffee,
    faCog,
    faCopyright,
    faEnvelope,
    faGlobe,
    faHeart,
    faIdCard,
    faInfoCircle,
    faNewspaper,
    faPaperPlane,
    faPlus,
    faSave,
    faTimes,
    faUserGraduate
} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-regular-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText} from '@fortawesome/vue-fontawesome'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';
import titleComponent from './components/titleComponent.vue';

library.add(
    faCoffee, faChild, faCircle, faArchive, faGlobe, faPaperPlane, faNewspaper, faHeart,
    faUserGraduate, faChalkboardTeacher, faComment, faTwitter, faEnvelope, faInfoCircle, faCopyright,
    faIdCard, faTimes, faPlus, faSave, faCheck, faArrowLeft, faCog, faAngleRight)

Vue.config.productionTip = false;

Vue.use(VueSimpleAlert);
Vue.use(BootstrapVue)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
Vue.component('vue-title', titleComponent);
Vue.component('InputText', InputText);
Vue.component('Button', Button);
Vue.component('Card', Card);

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");











