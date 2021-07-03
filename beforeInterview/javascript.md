## JS基础

### 1. derfer和async的区别

> https://www.cnblogs.com/zjp-zxy/p/9552809.html

### 2. 节流防抖的原理和使用场景

```
防抖: 每次触发事件时都取消之前的延时调用方法
function debounce(fn) {
  let timeout = null; // 创建一个标记用来存放定时器的返回值
  return function () {
    clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
    timeout = setTimeout(() => { 
    // 然后又创建一个新的 setTimeout, 
    // 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
    fn.apply(this, arguments);
   }, 500);
 };
}
function sayHi() {
  console.log('防抖成功');
}

var inp = document.getElementById('inp');
inp.addEventListener('input', debounce(sayHi)); // 防抖

节流: 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
function throttle(fn) {
  let canRun = true; // 通过闭包保存一个标记
  return function () {
    if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
    canRun = false; // 立即设置为false
    setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
     fn.apply(this, arguments);
     // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
     // 当定时器没有执行的时候标记永远是false，在开头被return掉
     canRun = true;
    }, 500);
  };
}
function sayHi(e) {
 console.log(e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', throttle(sayHi));

```

```
应用场景:

debounce
1. 登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖
2. 调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多，此时需要一次到位，就用到了防抖
3. 文本编辑器实时保存，当无任何更改操作一秒后进行保存

throttle
1. scroll 事件，每隔一秒计算一次位置信息等
2. 浏览器播放事件，每隔一秒计算一次进度信息等
3. input框实时搜索并发送请求展示下拉列表，每隔一秒发送一次请求 (也可做防抖)

```

### 3. 高阶函数/组件

> https://codesandbox.io/s/gaojiezujian-8kvzu?file=/src/1HocWindowInnerHeight.js


### 4. 组件的参数类型校验

> https://www.npmjs.com/package/prop-types
