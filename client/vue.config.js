module.exports = {
    productionSourceMap: false,
    css: {
        sourceMap: true,
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/scss/_var.scss";`,
            },
        }
    }
};
