'use strict';

module.exports = function(grunt) {
  
  // load all grunt tasks so don't have to load one by one
  require('load-grunt-tasks')(grunt);

  //Display the elapsed execution time of grunt tasks
  require('time-grunt')(grunt);

  // required for connect
  var modRewrite = require('connect-modrewrite');
  var serveStatic = require('serve-static');

  // Initializing project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // The actual grunt server settings
    connect: {
      options: {
        port: 8000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          base: ['app'],
          middleware: function(connect, options) {
            var middlewares = [];

            middlewares.push(modRewrite(['^[^\\.]*$ /index.html [L]']));
            
            options.base.forEach(function(base) {
              middlewares.push(serveStatic(base));
            });
            
            return middlewares;
          }
        }
      }
    },

    /*
    compass: {
      dist: {
        options: {
          config: 'config.rb'
          /*
          sassDir: 'app/styles',
          cssDir: 'app/styles',
          
        }
      }
    },
    */

    sass: {
      dist: {
        /*
        options: {
          sourcemap: 'inline'
        },
        */
        files: {
          'app/styles/main.css': 'app/styles/main.scss'
        }
      }
    },

    postcss: {
      options: {
        map: true, // inline sourcemaps
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
          //require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'app/styles/main.css',
        dest: 'app/styles/main.css'
      }
    },

    watch: {
      styles: {
        files: ['app/styles/main.scss'],
        tasks: [
          //'compass:dist',
          'sass:dist',
          'postcss:dist'
        ]
      },

      livereload: {
        options: {
          livereload: true //default port 35729
        },
        files: [
          'app/styles/main.css',
          'app/**/*.html',
          'app/js/*.js',
          'app/works.json',
          'Gruntfile.js',
        ]
      }
    }

  });

  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);

};