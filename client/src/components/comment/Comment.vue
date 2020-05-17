<template>
    <li class="comment-wrapper" v-if="comment">
        <div class="profile">
            <el-avatar
                :src="comment.avatar"
            />
        </div>
        <div class="msg has-shadow">
            <div class="msg-body">
                <p class="name">
                    {{comment.author}}
                    <span class="date" v-if="comment.created_at">
                        {{comment.created_at | formatDateAgo}}
                    </span>
                </p>
                <p class="content">{{comment.content}}</p>
            </div>
        </div>
    </li>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {CommentModel} from "@/models/comment";
    import {formatDateAgo} from "@/utils";

    @Component({
        filters: {
            formatDateAgo,
        },
    })
    export default class Comment extends Vue {
        @Prop() comment?: CommentModel;
    }
</script>

<style lang="scss">
    .comment-wrapper {
        list-style: none;
        text-align: left;
        overflow: hidden;
        margin-bottom: 2em;
        padding: .4em;

        .profile {
            width: 60px;
            float: left;
        }

        .msg {
            width: calc(100% - 60px);
            float: left;
            background-color: #fff;
            border-radius: 0 5px 5px 5px;
            position: relative;

            &::after {
                content: " ";
                position: absolute;
                left: -13px;
                top: 0;
                border: 14px solid transparent;
                border-top-color: #fff;
            }

            &-body {
                padding: .8em;
                color: #666;
                line-height: 1.5;
            }

            .content {
                white-space: pre-wrap;
            }
        }

        .date {
            float: right;
        }

        .name {
            margin: 0;
            color: #999;
            font-weight: 700;
            font-size: .8em;
        }

        p:last-child {
            margin-top: .6em;
            margin-bottom: 0;
        }

    }
</style>
