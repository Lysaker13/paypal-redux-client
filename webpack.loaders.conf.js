var path = require('path');

module.exports = [
    {
        enforce: "pre",
        test: /\.js$/,
        loaders: ["source-map-loader", "eslint-loader"]
    }
];
