<template>
    <ul class="comment-list">
        <Comment :key="comment.id" v-for="comment in comments" :comment="comment"></Comment>
    </ul>
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
        private channel;

        async mounted() {
            await this.$store.dispatch('comments/getAll');

            this.$emit('new-comment');

            this.channel = pusher.subscribe('comment-channel')

            this.channel.bind('new-comment', (data) => {
                this.$store.commit('comments/ADD_COMMENT', data.comment)
                this.$emit('new-comment');
            });
        }

        destroyed() {
            this.channel.unsubscribe();
        }
    }
</script>

<style lang="scss">
    .comment-list {
        padding: 1em 0;
        margin-bottom: 15px;
    }
</style>
