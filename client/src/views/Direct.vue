<template>
    <base-layout>
        <template v-slot:sidebar>
            sidebar
        </template>
        <template>

            <h2>Comments</h2>

            <comments/>
            <new-comment/>

        </template>
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
    export default class Direct extends Vue {}
</script>
