<template>
    <base-layout>
        <template v-slot:sidebar>

        </template>
        <template v-slot:content>

        </template>
    </base-layout>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import BaseLayout from "@/components/layouts/BaseLayout.vue";
    @Component({
        components: {BaseLayout}
    })
    export default class Direct extends Vue {
        @Prop() private msg!: string;
    }
</script>
