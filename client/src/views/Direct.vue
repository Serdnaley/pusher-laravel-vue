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
                <h2 style="margin: 0;">{{user}}</h2>

                <div>
                    <el-button
                        plain
                        type="info"
                        size="mini"
                        @click.prevent="logout()"
                    >
                        Logout
                    </el-button>
                    <prompt-install/>
                </div>
            </el-row>

            <comments
                ref="list"
                @new-comment="scrollBottom()"
            />

            <new-comment/>
        </div>

    </base-layout>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import BaseLayout from "@/components/layouts/BaseLayout.vue";
    import Comments from "@/components/comment/Comments.vue";
    import NewComment from "@/components/comment/NewComment.vue";
    import PromptInstall from "@/components/PromptInstall.vue";

    @Component({
        components: {
            PromptInstall,
            NewComment,
            Comments,
            BaseLayout,
        }
    })
    export default class Direct extends Vue {
        private user = '';

        created() {
            this.authorize();
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
            this.$nextTick(() => {
                const list = this.$refs.list as Vue;
                list.$el.scrollTop = 9999999999999999999999;
            })
        }
    }
</script>

<style lang="scss">
    .direct {
        height: 100%;
        display: flex;
        flex-direction: column;

        .comment-list {
            height: 100%;
            overflow-y: auto;
        }
    }
</style>
