import moment from "moment";

export function formatDateAgo(val) {
    const date = moment(val);

    if (date < moment().subtract(1, 'day')) {
        return date.format('MMMM Do YYYY');
    } else {
        return date.fromNow()
    }
}
