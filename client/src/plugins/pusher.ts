import Pusher from "pusher-js";

Pusher.logToConsole = process.env.NODE_ENV === 'development';

const pusher = new Pusher(process.env.VUE_APP_PUSHER_APP_KEY, {
    cluster: process.env.VUE_APP_PUSHER_APP_CLUSTER,
});


export default pusher;
