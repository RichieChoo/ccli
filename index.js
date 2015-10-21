module.exports = function (dir) {
  return new C(dir);
}

var C =  function (dir) {
	var args = process.argv;
	
  this.link         = symlink;
  this.file_path    = dir;
  this.current_path = process.cwd();
  this.args         = args;
  this.argv         = require('yargs').argv;
  this.home         = home();
  // alias
  this.fp           = dir;
  this.cp           = process.cwd();
  
	return this;
}


function home(){
  return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
}

function symlink(dir, dir_name) {
  var link = require('fs-symlink')

  link(dir, dir_name,  'junction').then(function () {
    console.log('copy modudle ' + dir_name + ' finished');
  })
};

