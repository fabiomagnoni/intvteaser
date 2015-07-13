module.exports = function(grunt) {

    require('load-grunt-config')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            developments: {
                files: {
                    'css/intv-teaser.css': 'less/intv-teaser.less'
                }
            },
            // production: {
            //     files: {
            //         ''
            //     }
            // }
        },
        copy: {
            styles: {
                src: 'bower_components/bootstrap/dist/css/bootstrap.min.css',
                dest: 'vendors/css/bootstrap.min.css'
            },
            scripts: {
                src: 'bower_components/jquery/dist/jquery.min.js',
                dest: 'vendors/js/jquery.min.js'
            }
        },
        watch: {
            styles: {
                files: [
                    'less/*.less',
                    'js/**/*.js'
                ],
                tasks: ['less', 'copy'],
                options: {
                    spawn: true
                }
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['watch']);
};
