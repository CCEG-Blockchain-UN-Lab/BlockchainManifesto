var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            // {output}/file.txt
            { from: './app/index.html' },
            { from: './app/mainTheme.mp3' },

            // // equivalent
            // 'from/file.txt',
            //
            // // {output}/to/file.txt
            // { from: './app/index.html', to: './dist/index.html' },
            //
            // // {output}/to/directory/file.txt
            // { from: 'from/file.txt', to: 'to/directory' },
            //
            // // Copy directory contents to {output}/
            // { from: 'from/directory' },
            //
            // // Copy directory contents to {output}/to/directory/
            // { from: 'from/directory', to: 'to/directory' },
            //
            // // Copy glob results to /absolute/path/
            // { from: 'from/directory/**/*', to: '/absolute/path' },
            //
            // // Copy glob results (with dot files) to /absolute/path/
            // {
            //     from: {
            //         glob:'from/directory/**/*',
            //         dot: true
            //     },
            //     to: '/absolute/path'
            // },
            //
            // // Copy glob results, relative to context
            // {
            //     context: 'from/directory',
            //     from: '**/*',
            //     to: '/absolute/path'
            // },
            //
            // // {output}/file/without/extension
            // {
            //     from: 'path/to/file.txt',
            //     to: 'file/without/extension',
            //     toType: 'file'
            // },
            //
            // // {output}/directory/with/extension.ext/file.txt
            // {
            //     from: 'path/to/file.txt',
            //     to: 'directory/with/extension.ext',
            //     toType: 'dir'
            // }
        ], {
            ignore: [
                // Doesn't copy any files with a txt extension    
                '*.txt',

                // // Doesn't copy any file, even if they start with a dot
                // '**/*',
                //
                // // Doesn't copy any file, except if they start with a dot
                // { glob: '**/*', dot: false }
            ],

            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: true
        })
    ]
};