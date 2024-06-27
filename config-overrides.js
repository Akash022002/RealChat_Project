const webpack = require("webpack");

module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        zlib: require.resolve("browserify-zlib"),
        fs: false,
        querystring: require.resolve("querystring-es3"),
        crypto: require.resolve("crypto-browserify"),
        http: require.resolve("stream-http"),
        net: false,
        assert: require.resolve("assert/"),
        vm: require.resolve("vm-browserify")
    });
    
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: "process/browser"
        }),
    ]);
    return config;
};
