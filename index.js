module.exports = function (dir) {
	var args = process.argv;
	
	return {
		file_path:dir,
		current_path : process.cwd(),
		args:args,
		argv: require('yargs').argv,
		// alias
		fp:dir,
		cp : process.cwd()
	}
}