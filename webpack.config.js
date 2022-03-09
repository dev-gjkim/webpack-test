const path = require('path');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', //실서비스에서는 production
    devtool: 'source-map',
    entry: './src/js/main.js',
    // 번들링 된 js파일의 이름과 저장될 경로를 지정
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'src/js')
            ],
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                }
            }

        }],
    },


}