## 1. yarn.lock

- npm会等一个包完全安装完才跳到下一个包，但yarn会并行执行包，因此速度会快很多

- yarn.lock文件是自动生成的，也完全Yarn来处理。当你使用Yarn CLI添加/升级/删除 依赖项的时，它将自动更新到您的yarn.lock文件。不要直接编辑这个文件，因为很容易破坏某些东西。

- 和package-lock.json起的作用相同(npm5以上)

> https://mp.weixin.qq.com/s/P5bBm5ogZHKtYgt8ttE0Fg