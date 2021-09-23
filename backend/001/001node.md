## nodejs 介绍

nodejs 是一个基于 Chrome V8 引擎的 JS 运行环境

nodejs 使用了一个事件驱动、非阻塞 I/O 的模型，使其轻量又高效

nodejs 的包管理工具 NPM，版本管理工具 NVM


## nodejs 的应用

1. BFF 层 -- 以前是后端给 html 模版，现在可以在 nodejs 里面去做，还可以做redis缓存，做请求合并，做负载均衡

2. 项目的构建工具 -- webpack

3. 做一些中小型的后端开发 -- 比如不需要分布式，没有密集计算

## npx

如果当个路径或者全局没有这个命令，会自动的安装，npm 会报错

```
// 启动一个 server
$ npx http-server
```

## http、https

```
// 创建一个https请求

const https = require("https");

https.get(
  "https://m.maoyan.com/ajax/topRatedMovies?token=&optimus_uuid=A2B765C017CF11ECAEE809589736973471F10CB10DAF40A9B74751F0FF070034&optimus_risk_level=71&optimus_code=10",
  (res) => {
      let str = '';
      // 监听数据
      res.on('data', (chunk) => {
        str += chunk
      })
      // 数据接受完成
      res.on('end', () => {
          console.log(str) // 一个html页面
      })
  }
);
```

```
// 创建一个 server

// 内置模块、三方模块、自定义模块
const http = require('http');

http.createServer((req, res) => {
    let url = req.url;
    res.write(url);
    res.end();
}).listen(8080, 'localhost',() => {
    console.log('localhost:8080')
})
```


## fs

```
const fs = require('fs');

// 异步写入，异步要有回调函数，错误优先
fs.writeFile('./test.txt', 'Hello World', (err, data) => {
    if (err) {
        ;
    } else {
        console.log('文件创建成功')
    }
})
```

## process

```
console.log(process.argv.slice(2))  // [ 'a', 'b' ]

$ node test.js a b
```

## NVM

nodejs 的版本管理工具

```
$ brew install wget
$ brew install curl
$ ls -la
$ touch ～/.bash_profile
$ vi .bash_profile
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
$ source ~/.bash_profile

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

```

> https://github.com/nvm-sh/nvm

## NPM

```
// 查看所有版本
$ npm view gulp versions
```