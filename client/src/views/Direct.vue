<template>
    <base-layout>
        <template v-slot:sidebar>
            sidebar
        </template>

        <div class="direct" ref="direct">
            <el-row
                type="flex"
                justify="space-between"
            >
                <h2 style="margin: 0;">You are logged in as {{user}}</h2>

                <el-button
                    size="mini"
                    @click.prevent="logout()"
                >
                    Logout
                </el-button>
            </el-row>

            <comments
                ref="list"
            />
            <new-comment
                @submitted="scrollBottom()"
            />
        </div>

    </base-layout>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import BaseLayout from "@/components/layouts/BaseLayout.vue";
    import Comments from "@/components/comment/Comments.vue";
    import NewComment from "@/components/comment/NewComment.vue";

    @Component({
        components: {
            NewComment,
            Comments,
            BaseLayout,
        }
    })
    export default class Direct extends Vue {
        private user = '';

        created() {
            this.authorize();
            setTimeout(() => {
                this.scrollBottom();
            }, 100);
        }

        async authorize() {
            this.user = localStorage.getItem('user') || '';

            while (!this.user) {
                this.user = prompt('Enter your name') || '';
            }

            localStorage.setItem('user', this.user);
        }

        logout() {
            localStorage.removeItem('user');
            this.authorize();
        }

        scrollBottom() {
            const list = this.$refs.list as Vue;
            list.$el.scrollTop = 9999999999999999999999;
        }
    }
</script>

<style lang="scss">
    .direct {
        height: 100%;

        .comment-list {
            height: calc(100% - 150px);
            overflow-y: auto;
        }
    }
</style>
