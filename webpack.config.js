import webpack from 'webpack'

module.exports = {
    target: 'web',
    devtool: 'source-map',
    entry: {
        app: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            './src/index.js'
        ]
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        preloaders: [{
            test: /\.(js|jsx)$/,
            loader: 'eslint',
            exclude: /node_modules/
        }],
        loaders: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            cacheDirectory: true,
            plugins: ['transform-runtime'],
            presets: ['es2015', 'react', 'stage-0'],
            env: {
              development: {
                plugins: [
                  ['react-transform', {
                    transforms: [{
                      transform: 'react-transform-hmr',
                      imports: ['react'],
                      locals: ['module']
                    }, {
                      transform: 'react-transform-catch-errors',
                      imports: ['react', 'redbox-react']
                    }]
                  }]
                ]
              },
              production: {
                plugins: [
                  'transform-react-remove-prop-types',
                  'transform-react-constant-elements'
                ]
              }
            }
          }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    }

}
