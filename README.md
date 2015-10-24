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
ccli.linkfolder('node_modules','aaa')
```

比如

```
ccli.linkfolder(ccli.fp + '/' + 'node_modules/', ccli.cp + '/' +'node_modules/')
```

### 更简单的用法

```
ccli.linkfolder(ccli.fp + '/' + 'node_modules/', ccli.cp + '/' +'node_modules/')
```

可以简写为


```
ccli.l2('node_modules/','node_modules/')
```

它会自动提供路径，src是模块所在路径，而dest是当前路径

### copy

```
ccli.copy('index.js',__dirname + '/aaa.js')
```

## 实例

https://github.com/i5ting/docto/

