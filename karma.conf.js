import webpackConfig from './webpack.config'

const karmaConfig = {
    files: [
        './node_modules/phantomjs-polyfill/bind-polyfill.js',
        { pattern: './test/tests.webpack.js', watched: false },
    ],
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    preprocessors: {
      './test/tests.webpack.js': ['webpack'],
    },
    reporters: ['dots'],
    singleRun: true,
    webpack: {
        resolve: {
            extensions: ['', '.js', '.json']
        },
        plugins: webpackConfig.plugins,
        module: {
            loaders: webpackConfig.module.loaders
        },
        externals: {
            'react/lib/ExecutionEnvironment': true,
            'react/lib/ReactContext': 'window',
            'text-encoding': 'window'
        }
    },
    webpackMiddleware: {
        noInfo: true
    }
}

module.exports = (cfg) => cfg.set(karmaConfig)
