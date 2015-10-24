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

### copy

```
ccli.copy('index.js',__dirname + '/aaa.js')
```