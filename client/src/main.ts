import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import ElementUI from 'element-ui'

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

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
