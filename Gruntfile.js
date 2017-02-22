var request = require('request'),
    exec = require('child_process').exec,
    os = require('os'),
    async = require('async'),
    path = require('path'),
    devDomain = "udai-dev-.net",
    sitDomain = "udai-sit-.net",
    uatDomain = "udai-uat-.net",
    prodDomain = "udai-prod-.net";

var LIVERELOAD_PORT = 9000;
// lrSnippet is just a function.
// It's a piece of Connect middleware that injects
// a script into the static served html.
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
// All the middleware necessary to serve static files.
var livereloadMiddleware = function(connect, options) {
    return [
        // Inject a livereloading script into static files.
        lrSnippet,
        // Serve static files.
        connect.static(options.base[0]),
        // Make empty directories browsable.
        connect.directory(options.base[0])
    ];
};

module.exports = function(grunt) {

    /* require('load-grunt-tasks')(grunt, {
         pattern: ['grunt-*']
     });*/
    require('load-grunt-tasks')(grunt, { pattern: ['grunt-*'] });

    var env = grunt.option('env') || 'sit',
        appVersion = grunt.option('appVersion') || '1.0.0',
        buildNumber = grunt.option('buildNumber') || '1',
        domain,
        prefix;

    switch (env) {
        case 'web-dev':
            domain = devDomain;
            break;
        case 'web-sit':
            domain = sitDomain;
            break;
        case 'web-UAT':
            domain = uatDomain;
            break;
        case 'web-PROD':
            domain = prodDomain;
            break;
    }
    // Project configuration.
    grunt.initConfig({

        copy: {
            assets: {
                expand: true,
                cwd: 'src',
                src: 'assets/**/*',
                dest: 'www'
            },
            css: {
                expand: true,
                cwd: 'src',
                src: 'css/**/*',
                dest: 'www'
            },
            html: {
                expand: true,
                cwd: 'src',
                src: ['templates/**/*', 'index.html'],
                dest: 'www'
            },

            vendor: {
                expand: true,
                cwd: 'src',
                src: 'bower_components/**/*',
                dest: 'www'
            },
            mockData: {
                expand: true,
                cwd: 'src',
                src: 'mock_data/**/*',
                dest: 'www'
            },
            js: {
                expand: true,
                cwd: 'src',
                src: 'js/**/*',
                dest: 'www'
            }
        },

        jshint: {
            options: {
                strict: false,
                globalstrict: false,
                newcap: false,
                globals: {
                    '$': true,
                    'JQuery': true,
                    'angular': true,
                    'angularApp': true
                }
            },
            files: ['src/js/**/*.js', 'test/**/*.js']
        },

        karma: {
            unit: {
                singleRun: false,
                configFile: 'karma.conf.js'
            }
        },
        connect: {
            options: {
                  
                    base: 'www',
                    livereload: true,
                    keepalive: true,
                    port: 9000,
                    open: true,
                    hostname: 'localhost',
                    middleware: livereloadMiddleware
                },
            server: {
                options: {
                    base: 'www',
                    livereload: true,
                    keepalive: true,
                    port: 9000,
                    open: true,
                    hostname: 'localhost',
                    middleware: livereloadMiddleware
                }
            }
        },

        uglify: {
            option: {

            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/js/',
                    src: '**/*.js',
                    dest: 'www/js'
                }]
            }
        },
        watch: {
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['jshint'],
            },
            src: {
                files: ['src/js/**/*.js'],
                tasks: ['jshint'],
            },
            html: {
                files: ['src/**/*.html'],
                tasks: ['copy'],
            },
            options: {
                livereload: '<%= connect.options.livereload %>'
            }

        },
        clean: ['www/*', 'coverage']
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.task.loadNpmTasks('grunt-contrib-clean');
    grunt.task.loadNpmTasks('grunt-contrib-uglify');
    grunt.task.loadNpmTasks('grunt-contrib-copy');
    grunt.task.loadNpmTasks('grunt-contrib-jshint');
    // Default task(s).
    grunt.registerTask('test', ['karma']);
    grunt.registerTask('cleanFiles', ['clean']);
    grunt.registerTask('js', ['jshint', 'uglify:build']);
    grunt.registerTask('jsChangeOnly', ['jshint', 'uglify:build', 'connect:server']);
    grunt.registerTask('uiGenProd', ['cleanFiles', 'copy', 'js', 'connect:server']);
    grunt.registerTask('uiGenDev', ['cleanFiles', 'copy', 'connect:server', 'watch']);
    grunt.registerTask('Dev', ['watch:src', 'connect:server']);

    grunt.registerTask('serve', function (target) {
    grunt.task.run([
        'connect:server',
        'watch'
        ]);
    });
};  