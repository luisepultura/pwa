var path = require('path');
module.exports = {
    entry: {
        index: ['./app/js/app.js',
            './app/js/toast.js',
            './app/js/menu.js',
            './app/js/notification.js',
            './app/js/offline.js'],
        latest: ['./app/js/app.js',
            './app/js/toast.js',
            './app/js/latest.js',
            './app/js/menu.js',
            './app/js/offline.js']
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/app/dist'
    },
    module: {
        loaders: [
            {
                //
                test: path.resolve(__dirname , 'js'),
                loader: 'babel-loader',
                query: {
                    presets: ["es2015"],
                }
            }
        ]
    }
};