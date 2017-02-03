module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: 80,
					base: '.',
					keepalive: true,
					hostname: '*'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['connect']);
};
