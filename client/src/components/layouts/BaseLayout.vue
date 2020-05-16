<template>
    <el-row class="base-layout">
        <el-col :md="6" class="base-layout__sidebar hidden-sm-and-down">
            <slot name="sidebar"/>
        </el-col>
        <el-col :md="18" class="base-layout__content">
            <slot/>
        </el-col>
    </el-row>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class BaseLayout extends Vue {}
</script>

<style lang="scss">
    .base-layout {
        height: 100vh;
        overflow: hidden;

        &__sidebar {
            height: 100%;
            padding: 15px;
            background: $--color-black;
            overflow-y: auto;
        }

        &__content {
            height: 100%;
            padding: 15px;
            overflow-y: auto;
        }
    }
</style>
