const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/main/webapp/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js-api-extend.min.js'
    },
};
