/* eslint-disable no-console */

import {register} from 'register-service-worker'
import {MessageBox} from "element-ui";

register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
        console.log('App is being served from cache by a service worker.')
    },
    registered(reg) {
        console.log('Service worker has been registered.')

        const check = () => reg.update();
        setInterval(check, 30000);
    },
    cached() {
        console.log('Content has been cached for offline use.')
    },
    updatefound() {
        console.log('New content is downloading.')
    },
    updated() {
        console.log('New content is available; page will be reloaded.')
        MessageBox({
            title: 'New version is available.',
            message: 'Page will be reloaded',
            type: 'info',
            showClose: false,
            showCancelButton: false,
            showConfirmButton: false,
            closeOnClickModal: false,
            closeOnPressEscape: false,
            customClass: 'service-worker-message',
        })
        setTimeout(() => document.location.reload(), 100)
    },
    offline() {
        console.log('No internet connection found. App is running in offline mode.')
        MessageBox({
            title: 'No internet connection found.',
            message: 'App is running in offline mode.',
            type: 'warning',
            showClose: false,
            showCancelButton: false,
            showConfirmButton: false,
            closeOnClickModal: false,
            closeOnPressEscape: false,
            customClass: 'service-worker-message',
        })
    },
    error(error) {
        console.error('Error during service worker registration:', error)
    }
});
