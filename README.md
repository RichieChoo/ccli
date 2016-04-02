# ccli

[![npm version](https://badge.fury.io/js/ccli.svg)](http://badge.fury.io/js/ccli)

return cli common varibles 

- file_path(fp)		: get current path
- current_path(cp)	: get file path
- argv 				: get argv
- args 				: get args

## Install

```
npm install --save ccli
```

## Usages

```
#!/usr/bin/env node
var ccli = require('.')(__dirname)

console.log(ccli.fp);
console.log(ccli.cp);
console.log(ccli.argv);

console.log('(%d,%d)', ccli.argv.x, ccli.argv.y);
```

### 获取用户主目录

```
ccli.home
```

### 创建软连接

```
ccli.link('node_modules','aaa')
```

### 创建软连接

```
ccli.linkfolder2('node_modules','aaa')
```

比如

```
ccli.linkfolder2(ccli.fp + '/' + 'node_modules/', ccli.cp + '/' +'node_modules/')
```

### 更简单的用法

```
ccli.linkfolder2(ccli.fp + '/' + 'node_modules/', ccli.cp + '/' +'node_modules/')
```

可以简写为


```
ccli.linkfolder('node_modules/','node_modules/')
```

它会自动提供路径，src是模块所在路径，而dest是当前路径

### copy

```
ccli.copy('index.js',__dirname + '/aaa.js')
```


### copy_dir_to

拷贝一个目录到另一个目录

```
ccli.copy_dir_to("a", "b")
```

### walkdir

列出path下面的所有目录

```
ccli.walkdir(path,  function(dir_path, dir_name){
  console.log(dir_path);
  console.log(dir_name);
}) 
```
## 实例

https://github.com/i5ting/docto/


## TODO

- [ ] 判断文件是否存在
- [ ] 判断文件夹是否存在