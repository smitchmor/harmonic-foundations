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

// module.exports = function(grunt) {

// grunt.initConfig({
// 	connect: {
// 		server: {
// 			options: {
// 				port: 80,
// 				base: '.',
// 				keepalive: false,
// 				hostname: '*'
// 			}
// 		}
// 	});

// // 	grunt.registerTask('rs', ['connect:server:keepalive']);
// 	grunt.registerTask('default', ['connect']);

// };
