const path = require('path');

module.exports = {
    entry: {
        app: './index.js'
    },
    target: "web",
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "counter.min.js"
    }
};