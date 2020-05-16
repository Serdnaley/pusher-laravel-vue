import axios from 'axios';

export default {
    namespaced: true,

    state: {
        all: [],
    },

    getters: {
        all: (state) => state.all,
    },

    mutations: {

        GET_COMMENTS(state, comments) {
            state.all = comments
        },

        ADD_COMMENT(state, comment) {
            state.all = [...state.all, comment]
        },

    },

    actions: {

        addOne({commit}, comment) {
            return new Promise((resolve, reject) => {
                axios
                    .post(`/comments`, comment)
                    .then(response => {
                        resolve(response)
                    }).catch(err => reject(err))
            })
        },

        getAll({commit}) {
            axios
                .get('/comments')
                .then(res => {
                    {
                        commit('GET_COMMENTS', res.data)
                    }
                })
                .catch(err => console.log(err))
        },

    },
}
