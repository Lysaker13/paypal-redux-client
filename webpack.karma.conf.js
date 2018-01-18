var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js'],
        alias: {
            googleApiClient: path.resolve(__dirname, 'src/'),
        }
    },
};