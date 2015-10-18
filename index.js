module.exports = function (dir) {
	var argv = process.argv;
	argv.shift();
	
	return {
		file_path:dir,
		current_path : process.cwd(),
		argv:argv,
		
		// alias
		fp:dir,
		cp : process.cwd()
	}
}