module.exports = {
    productionSourceMap: false,
    css: {
        sourceMap: true,
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/scss/_var.scss";`,
            },
        }
    },
    pwa: {
        workboxOptions: {
            swSrc: 'src/plugins/sw.js',
            exclude: /\.htaccess$/,
            skipWaiting: true
        }
    }
};
