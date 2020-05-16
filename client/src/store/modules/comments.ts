import axios from 'axios';
import {CommentModel} from "@/models/comment";

export default {
    namespaced: true,

    state: {
        all: [],
    },

    getters: {
        all: (state) => state.all,
    },

    mutations: {

        GET_COMMENTS(state, comments: []) {
            state.all = comments.map(item => new CommentModel(item));
        },

        ADD_COMMENT(state, item) {
            state.all = [...state.all, new CommentModel(item)]
        },

    },

    actions: {

        async addOne({commit}, comment) {
            return await axios
                .post(`/comment`, comment)
        },

        async getAll({commit}) {
            await axios
                .get('/comments')
                .then(res => {
                    {
                        commit('GET_COMMENTS', res.data)
                    }
                })
        },

    },
}
