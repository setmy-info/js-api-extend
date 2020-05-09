const path = require('path');

module.exports = {
    entry: 'src/main/webapp/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js-api-extend.js',
    },
};
