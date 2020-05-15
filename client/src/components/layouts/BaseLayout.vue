<template>
    <el-row class="base-layout">
        <el-col :md="6" class="base-layout__sidebar">
            <slot name="sidebar"/>
        </el-col>
        <el-col :md="18" class="base-layout__content">
            <slot name="content"/>
        </el-col>
    </el-row>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Direct extends Vue {
        @Prop() private msg!: string;
    }
</script>

<style lang="scss">
    .base-layout {
        height: 100vh;
        overflow: hidden;

        &__sidebar {
            padding: 15px;
            height: 100%;
            background: $--color-black;
            overflow-y: auto;
        }

        &__content {
            padding: 15px;
            overflow-y: auto;
        }
    }
</style>
