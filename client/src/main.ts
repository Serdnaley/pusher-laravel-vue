import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import ElementUI from 'element-ui'
import lodash from 'lodash';

import VueRouterBackButton from 'vue-router-back-button'
import {loadProgressBar} from 'axios-progress-bar'

import 'axios-progress-bar/dist/nprogress.css'
import './assets/scss/style.scss'

import './registerServiceWorker'
import router from './router'
import store from './store'
import CustomLoader from './plugins/custom-loader'

Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.use(VueRouterBackButton, {router});
Vue.use(CustomLoader);

loadProgressBar();

declare let window: {
    axios: typeof axios;
    _: typeof lodash;
}

window._ = lodash;
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
window.axios.defaults.headers.common.crossDomain = true;
window.axios.defaults.baseURL = process.env.VUE_APP_API_SERVER + '/api';

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
