import Pusher from "pusher-js";

const pusher = new Pusher(process.env.VUE_APP_PUSHER_APP_ID, {
    cluster: process.env.VUE_APP_PUSHER_APP_CLUSTER,
});

export default pusher;
