<template>
    <div class="container">
        <ul class="comment-list">
            <Comment :key="comment.id" v-for="comment in comments" :comment="comment"></Comment>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Comment from "@/components/comment/Comment.vue";
    import {mapGetters} from "vuex";
    import pusher from '@/plugins/pusher';

    @Component({
        components: {
            Comment,
        },

        computed: {
            ...mapGetters({
                comments: 'comments/all',
            })
        }
    })
    export default class Comments extends Vue {
        mounted() {
            this.$store.dispatch('comments/getAll')

            const channel = pusher.subscribe('comment-channel')

            channel.bind('new-comment', (data) => {
                this.$store.commit('ADD_COMMENT', data.comment)
            })
        }
    }
</script>

<style lang="scss">
    .comment-list {
        padding: 1em 0;
        margin-bottom: 15px;
    }
</style>
