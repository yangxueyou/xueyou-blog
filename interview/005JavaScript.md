## 1. catch后面能不能跟then

可以，catch是then第二个参数的语法糖

then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。

- [catch](/frontend/003/003javascript001?id=_3-catchthen)

## 2. async/await

async 函数是什么？一句话，它就是 Generator 函数的语法糖。

async 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里。

- [async](/frontend/003/003javascript001?id=_7-asyncawait)


## 3. 闭包

- [概念、应用场景](/frontend/003/003javascript001?id=_8-闭包)


## 4. 模块的理解

- [ESModule vs CommonJS](/frontend/003/003javascript001?id=_12-%e6%a8%a1%e5%9d%97%e7%9a%84%e7%90%86%e8%a7%a3)


## 5. 纯函数？副作用？

- [纯函数、副作用](/frontend/003/003javascript001?id=_13-纯函数？副作用？)


## 6. 跨域问题有哪些处理方式


- [跨域解决方案](/frontend/003/003javascript001?id=_14-跨域问题有哪些处理方式)


## 7. for...in 和 for...of 的区别

- [for...of](/frontend/003/003javascript001?id=_21-for-of)

- [for...in](/frontend/003/003javascript001?id=_2-for-in)


## 8. new 一个对象, 这个过程中发生了什么

```
var obj = new Object("name","sansan");
```

- [原理](/frontend/003/003javascript001?id=new-命令的原理)


## 9. 继承有哪些方式

- [继承]()


## 什么是高阶组件，请举例说明

- 解释一下原型链

- instanceof原理

- apply、call、bind的作用和区别

- 实现 add(1)(2)(3)
