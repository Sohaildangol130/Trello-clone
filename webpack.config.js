const path = require('path');

module.exports = {
    entry: {
        app: ['./assets/css/main.js',

            ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env']
            }
        }]
    }
}

// module.exports = {
//     entry: {
//         app: ['./assets/css/main.css',
//             './assets/css/tailwind.css'
//             ]
//     },
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         filename: 'bundle.css'
//     },
//     module: {
//         rules: [
//             { test: /\.css$/,exclude: /node_modules/, use: 'css-loader' },
//             { test: /\.ts$/,exclude: /node_modules/, use: 'ts-loader' }
//         ]
//     }
// }
