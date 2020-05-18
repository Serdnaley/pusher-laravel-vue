<template>
    <el-button
        plain
        size="mini"
        type="primary"
        @click="install()"
        v-if="show_install"
    >
        Install App
    </el-button>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class PromptInstall extends Vue {
        show_install = false;
        saved_event = null;

        created() {
            window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                this.saved_event = e;
                this.show_install = true;
            });
        }

        install() {
            if (!this.saved_event) return;

            this.show_install = false;

            this.saved_event.prompt();
            this.saved_event.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                    this.$nextTick(() => this.show_install = false)
                } else {
                    console.log('User dismissed the install prompt');
                }
            })
        }
    }
</script>

<style lang="scss">
    .prompt-install {
        padding-top: 15px;
        padding-bottom: 30px;
    }
</style>
