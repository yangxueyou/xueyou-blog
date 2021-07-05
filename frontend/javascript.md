## JS基础

### 001.数组的方法

#### 1. for

```

var a = [1, 2, 3];

// for循环
for(var i = 0; i < a.length; i++) {
  console.log(a[i]);
}

```

#### 2. while

```
var a = [1, 2, 3];

var i = 0;
while (i < a.length) {
  console.log(a[i]);
  i++;
}

var l = a.length;
while (l >= 0) {
  console.log(a[l]);
  l--
}
```


### 002.对象的方法

#### 1. in 运算符

```
var obj = { p: 1 };

'p' in obj // true

'toString' in obj // true
```

in运算符的一个问题是，它不能识别哪些属性是对象自身的，哪些属性是继承的。

通过  hasOwnProperty 解决

```
var obj = {};
if ('toString' in obj) {
  console.log(obj.hasOwnProperty('toString')) // false
}
```

#### 2. for ... in

不推荐使用for...in遍历数组

```
// 1. 它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。

// 2. 它不仅遍历对象自身的属性，还遍历继承的属性。

var obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
  console.log('键名：', i);
  console.log('键值：', obj[i]);
}
// 键名： a
// 键值： 1
// 键名： b
// 键值： 2
// 键名： c
// 键值： 3
```

如果继承的属性是可遍历的，那么就会被for...in循环遍历到

需要通过 hasOwnProperty 过滤一下

```
var person = { name: '老张' };

for (var key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}
// name
```

### with 语句

建议不要使用with语句


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



## JS优化

### 多条件判断

```

// bad

function test(id) {
  if (id === 'a' || id === 'b' || id === 'c' || id === 'd' ) {
    console.log('success');
  }
}


// good

const arr = ['a', 'b', 'c', 'd'];

function test(id) {
  if (arr.includes(id)) {
      console.log('red');
   }
}

```

### 判断数组中是否所有项都满足某条件

```

const arr = [
  { name: 'a', id: 1 },
  { name: 'b', id: 2 },
  { name: 'c', id: 3 }
];


const isAllRed = arr.every(a => a.id > 0);

console.log(isAllRed); // true


```


### 判断数组中是否有某一项满足条件

```
const arr = [
  { name: 'a', id: 1 },
  { name: 'b', id: 2 },
  { name: 'c', id: 3 }
];


const isAllRed = arr.some(a => a.id > 0);

console.log(isAllRed); // true

```

### 嵌套层级优化

```
// bad

function test(test1, test2) {
  const arr = ['1', '2', '3', '4'];
  if (test1) {
    if (arr.includes(test1)) {
      if (test2 > 10) {
        console.log('test2 大于 10');
      }
    }
  } else {
    throw new Error('数据错误');
  }
}


// good 

function test(test1, test2) {
  const arr = ['1', '2', '3', '4'];
  if (!test1) throw new Error('数据错误');
  if (!arr.includes(test1)) return;
  if (test2 > 10) {
    console.log('test2 大于 10');
  }
}


```

### 多条件分支的优化处理

```
// bad

function test(number) {
  if(number === 1) {
      return ['a1', 'a2']; 
  } else if (color === 2) {
      return ['b1', 'b2'];
  } else if (color === 3) {
      return [c1, c2];
  } else {
      return [];
  }
}

// good

const arr = {
  1: ['a1', 'a2'],
  2: ['b1', 'b2'],
  3: ['c1', 'c2'],
};

function test(key) {
  return arr[key] || [];
}


```