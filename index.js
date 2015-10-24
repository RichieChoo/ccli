module.exports = function (dir) {
  return new C(dir);
}
var fs = require('fs');
var symlink = require('fs-symlink');
var mkdirp = require('mkdirp');
var rm = require('rimraf');
var tpl_appy = require('tpl_apply');
var dirw = require('dirw');

var C =  function (dir) {
	var args = process.argv;
  // lib
  this.symlink      = symlink;
  this.mkdirp       = mkdirp;
  this.rm           = rm;
  this.yargs        = require('yargs');
  this.tpl_appy     = tpl_appy;
  this.dirw         = dirw;
  
  // attrs
  this.file_path    = dir;
  this.current_path = process.cwd();
  this.args         = args;
  this.argv         = require('yargs').argv;
  this.home         = home();
  
  // async methods
  this.link         = symlink;
  this.mkdir        = mkdirp;
  this.rmdir        = rmdir;
  this.copy         = copy;
  this.copy_to      = copy_to;
  this.tpl          = tpl;
  this.walkdir      = walkdir;
  this.linkfolder2   = linkfolder;
  this.linkfolder = function(path, dest){
    this.linkfolder2(this.fp + '/' + path, this.cp + '/' + dest)
  }
  
  // sync methods
  this.mkdir_sync   = mkdirpSync;
  this.rmdir_sync   = rmdirSync;
  
  // alias
  this.fp           = dir;
  this.cp           = process.cwd();
  
	return this;
}

function home (){
  return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
}

function symlink (dir, dir_name) {
  console.log(arguments);
  var cb = function () {
    console.log('symlink: copy modudle ' + dir_name + ' finished');
  }
  
  if (arguments.length == 3) {
    cb = arguments[2]
  }

  symlink(dir, dir_name,  'junction').then(cb)
};

function mkdirp (path, cb) {
  mkdirp(path, cb);
}

function rmdir (path, cb){
  rm(path, cb);
}

function mkdirpSync (path, cb) {
  mkdirp.sync(path);
}

function rmdirSync (path, cb) {
  rm.sync(path);
}

function copy (src, dest) {
  fs.createReadStream(src).pipe(fs.createWriteStream(dest));
}

function copy_to (source_arr, dest_path) {
  source_arr.forEach(function (item) {
    copy(item, dest_path + item)
  })
}

function tpl (source, data, dest) {
  tpl_appy.tpl_apply(source, data, dest);
}

function walkdir (path, cb) {
  dirw.dir(path, cb); 
}

function linkfolder (path, dest) {
  walkdir(path,  function(dir_path, dir_name){
    console.log(dir_path);
    console.log(dir_name);
    symlink (dir_path, dest + '/' + dir_name)
  }) 
}
