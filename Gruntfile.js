module.exports = function(grunt) {
  grunt.initConfig({
    'loopback_auto': {
      'ligvid': {
        options: {
          dataSource: 'ligvid',
          app: './server/server',
          config: './server/model-config',
          method: 'autoupdate'
        }
      }
    }
  });
  // Load the plugin
  grunt.loadNpmTasks('grunt-loopback-auto');
  // register tasks
  grunt.registerTask('autoupdate', ['loopback_auto:ligvid']);
  grunt.registerTask('default', ['autoupdate']);
};
