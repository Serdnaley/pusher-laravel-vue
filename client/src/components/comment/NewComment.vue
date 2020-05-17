<template>
    <div id="commentForm" class="box has-shadow has-background-white">

        <form
            @submit.prevent="submit()"
            @keyup.ctrl.enter="submit()"
            @keyup.meta.enter="submit()"
        >
            <el-row
                type="flex"
                align="top"
            >
                <el-input
                    type="textarea"
                    name="comment"
                    v-model="comment.content"
                    placeholder="Type your message..."
                    autosize
                    :class="is_valid || !dirty ? '' : 'invalid'"
                />
                <div style="margin-left: 15px;">
                    <el-button
                        type="primary"
                        size="medium"
                        icon="el-icon-check"
                        :loading="loading"
                        @click.prevent="submit()"
                        autofocus
                    />
                </div>
            </el-row>
        </form>
        <br>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {CommentModel} from "@/models/comment";

    @Component
    export default class NewComment extends Vue {
        private loading = false;
        private dirty = false;
        private comment = new CommentModel();

        private get is_valid() {
            return this.comment.content.trim().length;
        }

        async submit() {

            if (!this.is_valid) {
                this.dirty = true;
                return;
            }

            this.loading = true;

            this.comment.author = localStorage.getItem('user') || '';
            this.comment.content = this.comment.content.trim();

            await this.$store
                .dispatch('comments/addOne', this.comment)
                .then(() => {
                    this.comment.content = '';
                })
                .catch((err) => console.log(err.response));

            this.$emit('submitted');

            this.loading = false;
            this.dirty = false;
        }
    }
</script>
