import moment, {Moment} from "moment";

export class CommentModel {

    public id: number | null = null;
    public content = '';
    public author = '';
    public created_at: Moment | null = null;
    public updated_at: Moment | null = null;

    constructor(data = {}) {
        for (const key in data)
            this[key] = data[key];

        if (this.created_at) this.created_at = moment(this.created_at);
        if (this.updated_at) this.updated_at = moment(this.updated_at);
    }
}
