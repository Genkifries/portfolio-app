// Generated on 2015-03-13 using generator-angular 0.11.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Rewrite URLs. For AngularJS html5mode(true).
  var modRewrite = require('connect-modrewrite');

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist',
    bin: 'bin'
  };

  // Environment Configurations
  // accessToken: key of the access token in local storage.
  // baseUrl: base url of the website. used for emails when sending in app.
  var envConfig = {
    'derby': {
      'dev': {
        //apiRoot: 'https://dev.lvfh.net/igp/api',
		//apiRoot: 'https://demo.lvfh.net/igp/api',
        apiRoot: 'https://www.derbydraft.com/igp/api',
        clientId: 'derby',
        accessToken: 'derbyAccessToken',
        baseUrl: 'https://dev-derby.lvfh.net',
        paypal: {
          actionurl: 'https://www.sandbox.paypal.com/cgi-bin/webscr',
          business: 'yan-facilitator@lvfh.com',
          currency: 'USD',
          env: 'www.sandbox',
          notifyurl: 'https://dev.lvfh.net/igp/api/paypal',
          returnurl: 'https://dev-derby.lvfh.net/deposit/success',
          cancelreturn: 'https://dev-derby.lvfh.net/deposit/cancel'
        }
      },
      'demo': {
        apiRoot: 'https://demo.lvfh.net/igp/api',
        clientId: 'derby',
        accessToken: 'derbyAccessToken',
        baseUrl: 'https://demo-derby.lvfh.net',
        paypal: {
          actionurl: 'https://www.sandbox.paypal.com/cgi-bin/webscr',
          business: 'yan-facilitator@lvfh.com',
          currency: 'USD',
          env: 'www.sandbox',
          notifyurl: 'https://demo.lvfh.net/igp/api/paypal',
          returnurl: 'https://demo-derby.lvfh.net/deposit/success',
          cancelreturn: 'https://demo-derby.lvfh.net/deposit/cancel'
        }
      },
      'prod': {
        apiRoot: 'https://www.derbydraft.com/igp/api',
        clientId: 'derby',
        accessToken: 'derbyAccessToken',
        baseUrl: 'https://www.derbydraft.com',
        paypal: {
          actionurl: 'https://www.paypal.com/cgi-bin/webscr',
          //actionurl: 'https://www.sandbox.paypal.com/cgi-bin/webscr',
          business: 'ivan@lvfh.com',
          currency: 'USD',
          //env: 'www.sandbox',
          env: 'www',
          notifyurl: 'https://www.derbydraft.com/igp/api/paypal',
          returnurl: 'https://www.derbydraft.com/deposit/success',
          cancelreturn: 'https://www.derbydraft.com/deposit/cancel'
        }
      }
    },
    'derbytournaments': {
      'dev': {
        apiRoot: 'https://dev.lvfh.net/igp/api',
        //apiRoot: 'https://www.derbytournaments.com/igp/api',
        clientId: 'derby',
        accessToken: 'derbyAccessToken',
        baseUrl: 'https://dev-derby.lvfh.net',
        paypal: {
          actionurl: 'https://www.sandbox.paypal.com/cgi-bin/webscr',
          business: 'yan-facilitator@lvfh.com',
          currency: 'USD',
          env: 'www.sandbox',
          notifyurl: 'https://dev.lvfh.net/igp/api/paypal',
          returnurl: 'https://dev-derby.lvfh.net/deposit/success',
          cancelreturn: 'https://dev-derby.lvfh.net/deposit/cancel'
        }
      },
      'demo': {
        apiRoot: 'https://demo.lvfh.net/igp/api',
        clientId: 'derby',
        accessToken: 'derbyAccessToken',
        baseUrl: 'https://demo-derby.lvfh.net',
        paypal: {
          actionurl: 'https://www.sandbox.paypal.com/cgi-bin/webscr',
          business: 'yan-facilitator@lvfh.com',
          currency: 'USD',
          env: 'www.sandbox',
          notifyurl: 'https://demo.lvfh.net/igp/api/paypal',
          returnurl: 'https://demo-derby.lvfh.net/deposit/success',
          cancelreturn: 'https://demo-derby.lvfh.net/deposit/cancel'
        }
      },
      'prod': {
        apiRoot: 'https://www.derbytournaments.com/igp/api',
        clientId: 'derby',
        accessToken: 'derbyAccessToken',
        baseUrl: 'https://www.derbytournaments.com',
        paypal: {
          actionurl: 'https://www.paypal.com/cgi-bin/webscr',
          //actionurl: 'https://www.sandbox.paypal.com/cgi-bin/webscr',
          business: 'ivan@lvfh.com',
          currency: 'USD',
          //env: 'www.sandbox',
          env: 'www',
          notifyurl: 'https://www.derbytournaments.com/igp/api/paypal',
          returnurl: 'https://www.derbytournaments.com/deposit/success',
          cancelreturn: 'https://www.derbytournaments.com/deposit/cancel'
        }
      }
    },
    'cfl': {
      'dev': {
        apiRoot: 'https://dev.lvfh.net/igp/api',
        clientId: 'derby',
        accessToken: 'cflAccessToken',
        paypal: {
          actionurl: 'https://www.sandbox.paypal.com/cgi-bin/webscr',
          business: 'yan-facilitator@lvfh.com',
          currency: 'USD',
          env: 'www.sandbox',
          notifyurl: 'https://dev.lvfh.net/igp/api/paypal',
          returnurl: 'https://dev-derby.lvfh.net/deposit/success',
          cancelreturn: 'https://dev-derby.lvfh.net/deposit/cancel'
        }
      },
      'demo': {
        apiRoot: 'https://demo.lvfh.net/igp/api',
        clientId: 'derby',
        accessToken: 'cflAccessToken',
        paypal: {
          actionurl: 'https://www.sandbox.paypal.com/cgi-bin/webscr',
          business: 'yan-facilitator@lvfh.com',
          currency: 'USD',
          env: 'www.sandbox',
          notifyurl: 'https://demo.lvfh.net/igp/api/paypal',
          returnurl: 'https://demo-derby.lvfh.net/deposit/success',
          cancelreturn: 'https://demo-derby.lvfh.net/deposit/cancel'
        }
      },
      'prod': {
        apiRoot: 'https://www.derbytournaments.com/igp/api',
        clientId: 'derby',
        accessToken: 'cflAccessToken',
        paypal: {
          actionurl: 'https://www.paypal.com/cgi-bin/webscr',
          //actionurl: 'https://www.sandbox.paypal.com/cgi-bin/webscr',
          business: 'ivan@lvfh.com',
          currency: 'USD',
          //env: 'www.sandbox',
          env: 'www',
          notifyurl: 'https://www.derbytournaments.com/igp/api/paypal',
          returnurl: 'https://www.derbytournaments.com/deposit/success',
          cancelreturn: 'https://www.derbytournaments.com/deposit/cancel'
        }
      }
    },
    'ratuvegas': {
      'dev': {
        apiRoot: 'https://dev.lvfh.net/igp/api',
        clientId: 'ratuvegas',
        accessToken: 'ratuAccessToken'
      },
      'prod': {
        apiRoot: '/igp/api',
        clientId: 'ratuvegas',
        accessToken: 'ratuAccessToken'
      }
    },
    'jackshigh': {
      'dev': {
        apiRoot: 'https://dev.lvfh.net/igp/api',
        //apiRoot: 'http://localhost:9000/igp/api',
        clientId: 'jackshigh',
        accessToken: 'jackshighAccessToken',
        metaTags: grunt.file.readJSON('metadata/jackshigh/metatags.json')
      },
      'prod': {
        apiRoot: '/igp/api',
        clientId: 'jackshigh',
        accessToken: 'jackshighAccessToken',
        metaTags: grunt.file.readJSON('metadata/jackshigh/metatags.json')
      }
    },
    'jackpotdigital': {
      'dev': {
        apiRoot: 'https://dev.lvfh.net/igp/api',
        clientId: 'lvfh',
        accessToken: 'jpAccessToken',
        gameData: grunt.file.readJSON('gamedata/jackpotdigital/games.json')
      },
      'prod': {
        apiRoot: '/igp/api',
        clientId: 'lvfh',
        accessToken: 'jpAccessToken',
        gameData: grunt.file.readJSON('gamedata/jackpotdigital/games.json')
      }
    }
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Environment settings
    env: envConfig.derby.dev,

    // Client Id settings
    clientId: 'derby',

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      commonjs: {
        files: ['<%= yeoman.app %>/common/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all', 'watchCopyBin:<%= clientId %>'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      js: {
        files: ['<%= yeoman.app %>/sites/{,*/}/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all', 'watchCopyBin:<%= clientId %>'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      commonstyles: {
        files: ['<%= yeoman.app %>/common/styles/{,*/}*.css'],
        tasks: ['watchCopyStyle:<%= clientId %>', 'autoprefixer']
      },
      styles: {
        files: ['<%= yeoman.app %>/sites/{,*}/styles/{,*/}*.css'],
        tasks: ['watchCopyStyle:<%= clientId %>', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '<%= yeoman.app %>/common/{,*/,*/*/}*.html',
          '<%= yeoman.app %>/sites/{,*/,*/*/,*/*/*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/common/images/{,*/,*/*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.app %>/sites/{,*}/images/{,*/,*/*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        tasks: ['watchCopyBin:<%= clientId %>']
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        //port: 9000,
        port: 9001,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              modRewrite(['^[^\\.]*$ /index.html [L]']),
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect().use(
                '/app/styles',
                connect.static('./app/styles')
              ),
              connect.static(appConfig.bin)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9000,
          middleware: function (connect) {
            return [
              modRewrite(['^[^\\.]*$ /index.html [L]']),
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.bin)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              modRewrite(['^[^\\.]*$ /index.html [L]']),
              connect.static(appConfig.dist)
            ];
          }
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/common/scripts/{,*/}*.js',
          '<%= yeoman.app %>/sites/{,*}/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '<%= yeoman.bin %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*',
            'mobileapp/www/*'
          ]
        }]
      },
      server: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.bin %>/{,*/}*'
          ]
        }]
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      server: {
        options: {
          map: true,
        },
        files: [{
          expand: true,
          cwd: '.tmp/common/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }, {
          expand: true,
          cwd: '.tmp/site/<%= clientId %>/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }, {
          expand: true,
          cwd: '.tmp/site/<%= clientId %>/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.<%= clientId %>.html'],
        ignorePath:  /\.\.\//
      },
      test: {
        devDependencies: true,
        src: '<%= karma.unit.configFile %>',
        ignorePath:  /\.\.\//,
        fileTypes:{
          js: {
            block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
              detect: {
                js: /'(.*\.js)'/gi
              },
              replace: {
                js: '\'{{filePath}}\','
              }
            }
          }
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/,*/*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/styles/fonts/*',
          '!<%= yeoman.dist %>/images/ignore/{,*/,*/*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.bin %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/,*/*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>',
          '<%= yeoman.dist %>/images',
          '<%= yeoman.dist %>/styles'
        ]
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.bin %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.bin %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          dest: '<%= yeoman.dist %>/index.html',
          src: '<%= yeoman.app %>/index.<%= clientId %>.html'
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.txt',
            '.htaccess',
            'images/{,*/,*/*/}*.{webp}',
            'styles/fonts/{,*/}*.*',
            'config.js',
            'cordova.js',
            'cordova.css'
          ]
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/common',
          dest: '<%= yeoman.dist %>',
          src: [
            'views/{,*/}*.html',
            'images/{,*/,*/*/}*.{png,jpg,jpeg,gif,webp,svg}',
            'styles/fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/sites/<%= clientId %>',
          dest: '<%= yeoman.dist %>',
          src: [
            'views/{,*/}*.html',
            'images/{,*/,*/*/}*.{png,jpg,jpeg,gif,webp,svg}',
            'styles/fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: 'bower_components/bootstrap/dist',
          src: 'fonts/*',
          dest: '<%= yeoman.dist %>'
        }, {
          expand: true,
          cwd: 'bower_components/components-font-awesome',
          src: 'fonts/*',
          dest: '<%= yeoman.dist %>'
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/sites/<%= clientId %>/icons',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png}'
          ]
        }]
      },
      styles: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/common/styles',
          dest: '.tmp/styles/',
          src: '{,*/}*.css'
        }, {
          expand: true,
          cwd: '<%= yeoman.app %>/sites/<%= clientId %>/styles',
          dest: '.tmp/styles/',
          src: '{,*/}*.css'
        }]
      },
      mobileapp: {
        expand: true,
        cwd: '<%= yeoman.dist %>',
        dest: 'mobileapp/www/',
        src: ['**', '!robots.txt']
      },
      bin: {
        files: [{
          dest: '<%= yeoman.bin %>/index.html',
          src: '<%= yeoman.app %>/index.<%= clientId %>.html'
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.bin %>',
          src: [
            '*.txt',
            '.htaccess',
            'config.js',
            'cordova.js',
            'cordova.css'
          ]
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/common',
          dest: '<%= yeoman.bin %>',
          src: [
            'scripts/{,*/}*.js',
            'views/{,*/}*.html',
            'images/{,*/,*/*/}*.{png,jpg,jpeg,gif,webp,svg}',
            'styles/fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/sites/<%= clientId %>',
          dest: '<%= yeoman.bin %>',
          src: [
            'scripts/{,*/}*.js',
            'views/{,*/}*.html',
            'images/{,*/,*/*/}*.{png,jpg,jpeg,gif,webp,svg}',
            'styles/fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/sites/<%= clientId %>/icons',
          dest: '<%= yeoman.bin %>',
          src: [
            '*.{ico,png}'
          ]
        }]
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'watchCopyStyle:<%= clientId %>'
      ],
      test: [
        'watchCopyStyle:<%= clientId %>'
      ],
      dist: [
        'watchCopyStyle:<%= clientId %>',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    },

    // Environment Settings
    ngconstant: {
      options: {
        name: 'derbyApp',
        wrap: '\'use strict\';\n\n{%= __ngModule %}',
        deps: false
      },
      main: {
        options: {
          dest: '<%= yeoman.app %>/common/scripts/services/environment.js',
        },
        constants: {
          ENV: '<%= env %>'
        }
      }
    },

    // Replace text in index file for the different platforms
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: 'timestamp',
              replacement: '<%= new Date().getTime() %>'
            }
          ]
        },
        files: [
          { src: ['<%= yeoman.dist %>/index.html'], dest: '<%= yeoman.dist %>/index.html' }
        ]
      },
      mobileapp: {
        options: {
          patterns: [
            {
              match: /<base href=\"\/\">/gi,
              replacement: ''
            }
          ]
        },
        files: [
          { src: ['mobileapp/www/index.html'], dest: 'mobileapp/www/index.html' }
        ]
      }
    }
  });

  function init(site, env) {
    grunt.config.set('clientId', site);
    grunt.config.set('env', envConfig[site][env]);
  }

  grunt.registerTask('serve', 'Compile then start a connect web server', function (site, target) {
    site = site || 'derby';
    var env = grunt.option('env') || 'dev';
    init(site, env);

    if (target === 'dist') {
      return grunt.task.run(['build:'+site, 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'ngconstant:main',
      'wiredep',
      'copy:bin',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('test', function(site) {
    site = site || 'derby';
    var env = grunt.option('env') || 'dev';
    init(site, env);

    grunt.task.run([
      'clean:server',
      'ngconstant:main',
      'wiredep',
      'copy:bin',
      'concurrent:test',
      'autoprefixer',
      'connect:test',
      'karma'
    ]);
  });


  // Used by CI server only
  // handle mobile semantic versioning only if buildnumber arg is available
  grunt.registerTask('updateCordovaConfig', function () {
    var bn = grunt.option('buildnumber');
    if(!isNaN(bn) && parseInt(Number(bn)) === bn && !isNaN(parseInt(bn, 10)) && bn > 0) {

      // read cordova config file and find the string to replace
      var data = grunt.file.read('mobileapp/config.xml').toString();
      console.log(data);
      var replaceString = 'version="0.0.1"';
      if(data.indexOf(replaceString)===-1) {
        return grunt.fail.fatal('In Cordova config.xml could not find ' +replaceString);
      }

      // convert build number to semver number
      var version = '' +Math.floor(bn/10000) +'.' +Math.floor(bn % 10000 / 100) +'.' +Math.floor(bn % 100);
      console.log('Build number ' +bn +' converted to ' +version +'. Writing new config.xml file: ');

      // replace version in config.xml file
      var newData = data.replace(replaceString, 'version="' +version +'"');
      console.log(newData);
      grunt.file.write('mobileapp/config.xml', newData);
    } else {
      return grunt.fail.fatal('Parameter "--buildnumber=XXX" must be supplied for this Grunt task');
    }
  });


  grunt.registerTask('build', function (site) {
    site = site || 'derby';
    var env = grunt.option('env') || 'dev';
    init(site, env);

    grunt.task.run([
      'clean:dist',
      'ngconstant:main',
      'wiredep',
      'copy:bin',
      'useminPrepare',
      'concurrent:dist',
      'autoprefixer',
      'concat',
      'ngAnnotate',
      'copy:dist',
      //'cdnify',
      'cssmin',
      'uglify',
      'filerev',
      'usemin',
      'htmlmin',
      'replace:dist',
      'copy:mobileapp',
      'replace:mobileapp'
    ]);

  });

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);


  // because watch and concurrent runs in another process, clientId needs to be re set
  grunt.registerTask('watchCopyBin', function(site) {
    if(site) {
      grunt.config.set('clientId', site);
    }

    grunt.task.run([
      'copy:bin'
    ]);
  });

  // because watch and concurrent runs in another process, clientId needs to be re set
  grunt.registerTask('watchCopyStyle', function(site) {
    if(site) {
      grunt.config.set('clientId', site);
    }

    grunt.task.run([
      'copy:styles'
    ]);
  });
};
