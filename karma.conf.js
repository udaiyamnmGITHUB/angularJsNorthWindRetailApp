module.exports = function (config) {
    config.set({

        basePath: '',

        files: [
            'src/bower_components/angular/angular.js',
            'src/bower_components/angular-route/angular-route.js',
            'src/bower_components/angular-mocks/angular-mocks.js',
            'src/bower_components/ui-router/release/angular-ui-router.js',
            'src/js/**/*.js',
            'src/js/app.js',
            'src/js/a_utilities.js',
            'test/**/*.js'
        ],

        autoWatch: true,
        port: 9876,

        frameworks: ['jasmine'],

        preprocessors: {
            'src/js/**/*.js': 'coverage'
        },

      browsers: ['Chrome', 'Chrome_without_security'],


        plugins: [
            'karma-coverage',
            'karma-jasmine',
            'karma-firefox-launcher'
        ],

        reporters: ['progress', 'coverage'],
        coverageReporter: {
            dir: 'coverage',
            subdir: '.'
            // Would output the results into: .'/coverage/'
        },
        htmlReporter: {
            outputFile: 'angularTest.html'
        },

        colors: true

    });
};
