<template>
    <div id="commentForm" class="box has-shadow has-background-white">

        <form @submit.prevent="submit()">
            <div class="field has-margin-top">

                <div class="form-item">
                    <label class="label">Your name</label>
                    <div class="control">
                        <el-input
                            type="text"
                            placeholder="Your name"
                            class="input is-medium"
                            v-model="comment.author"
                        />
                    </div>
                </div>
                <div class="form-item">
                    <label class="label">Your comment</label>
                    <div class="control">
                        <el-input
                            type="textarea"
                            style="height:100px;"
                            name="comment"
                            class="input is-medium" autocomplete="true" v-model="comment.content"
                            placeholder="lorem ipsum"
                        />
                    </div>

                </div>
                <div class="form-item">
                    <el-button
                        type="primary"
                        :disabled="!is_valid"
                        :loading="loading"
                        @click.prevent="submit()"
                    >
                        Submit
                    </el-button>
                </div>
            </div>
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
        private comment = new CommentModel();

        private get is_valid() {
            return this.comment.content !== '' && this.comment.author !== ''
        }

        async submit() {
            this.loading = true;

            await this.$store
                .dispatch('comments/addOne', this.comment)
                .catch((err) => console.log(err.response));

            this.loading = false;
        }
    }
</script>
