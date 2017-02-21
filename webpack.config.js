const path = require('path');

module.exports = {
    // the entry file for the bundle
    entry: {
        app: path.join(__dirname, '/client/src/app.jsx'),
    },

    // the bundle file we wil lget in the result
    output: {
        path: path.join(__dirname, '/client/dist/js'),
        filename: 'app.js',
    }, 

    module: {
        // apply loaders to files that meet given conditions
        loaders: [
        {
            test    : /(\.jsx|\.js)?$/,
            include : path.join(__dirname, '/client/src'),
            loader  : 'babel',
            query   : {
                presets: ["react", "es2015"]
            }
        },
        {
            test    : /\.js?$/,
            include : path.join(__dirname, '/server/routes'),
            loader  : 'babel',
            query   : {
                presets: ["react", "es2015"]
            }
        },
        
        ],
    },

    // start webpack in a watch mode
    watch: true
}