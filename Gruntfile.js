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
        watch: {
            styles: {
                files: 'less/*.less',
                tasks: ['less'],
                options: {
                    spawn: true
                }
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['watch']);
};
