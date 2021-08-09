## JS基础

### 001.数组的总结

#### 0. 创建数组

```
// bad
var arr = new Array(1, 2);

// good
var arr = [1, 2];
```

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

#### 3. Array.isArray()

弥补typeof运算符的不足

```
var arr = [1, 2, 3];

typeof arr // "object"
Array.isArray(arr) // true
```

#### 4. valueOf()，toString()

valueOf方法是一个所有对象都拥有的方法，表示对该对象求值。

不同对象的valueOf方法不尽一致，数组的valueOf方法返回数组本身。

```
var arr = [1, 2, 3];
arr.valueOf() // [1, 2, 3]
```

toString方法也是对象的通用方法，数组的toString方法返回数组的字符串形式。

```
var arr = [1, 2, 3];
arr.toString() // "1,2,3"

var arr = [1, 2, 3, [4, 5, 6]];
arr.toString() // "1,2,3,4,5,6"
```


#### 5. push()，pop()

```
var arr = [];

arr.push(1) // 1 返回数组长度1
arr.push('a') // 2 返回数组长度2
arr.push(true, {}) // 4  返回数组长度4
arr // [1, 'a', true, {}]  原数组被改变
```

```
var arr = ['a', 'b', 'c'];

arr.pop() // 'c' 返回被删除的元素c
arr // ['a', 'b']   原数组被改变
```

后进先出”的栈结构（stack）

```
var arr = [];
arr.push(1, 2);
arr.push(3);
arr.pop();
arr // [1, 2]
```

#### 6. shift()，unshift()

```
var a = ['a', 'b', 'c'];

a.shift() // 'a'  返回被删除的元素
a // ['b', 'c']   原数组被改变
```

#### 7. join()

```
var a = [1, 2, 3, 4];

a.join(' ') // '1 2 3 4'
a.join(' | ') // "1 | 2 | 3 | 4"
a.join() // "1,2,3,4"  默认用逗号分隔

[undefined, null].join('#')
// '#'  如果数组成员是undefined或null或空位，会被转成空字符串

['a',, 'b'].join('-')
// 'a--b'  如果数组成员是undefined或null或空位，会被转成空字符串
```

通过call方法，这个方法也可以用于字符串或类似数组的对象。

```
Array.prototype.join.call('hello', '-')
// "h-e-l-l-o"

var obj = { 0: 'a', 1: 'b', length: 2 };
Array.prototype.join.call(obj, '-')
// 'a-b'
```

#### 8. concat()

然后返回一个新数组，原数组不变

```
['hello'].concat(['world'])
// ["hello", "world"]

['hello'].concat(['world'], ['!'])
// ["hello", "world", "!"]

[].concat({a: 1}, {b: 2})
// [{ a: 1 }, { b: 2 }]

[2].concat({a: 1})
// [2, {a: 1}]
```

除了数组作为参数，concat也接受其他类型的值作为参数，添加到目标数组尾部。

```
[1, 2, 3].concat(4, 5, 6)
// [1, 2, 3, 4, 5, 6]
```

如果数组成员包括对象，concat方法返回当前数组的一个浅拷贝。所谓“浅拷贝”，指的是新数组拷贝的是对象的引用。

```
var obj = { a: 1 };
var oldArray = [obj];

var newArray = oldArray.concat();

obj.a = 2;
newArray[0].a // 2
```

#### 9. reverse()

返回改变后的数组。注意，该方法将改变原数组

```
var a = ['a', 'b', 'c'];

a.reverse() // ["c", "b", "a"]
a // ["c", "b", "a"]
```

#### 10. slice()

提取目标数组的一部分，返回一个新数组，

原数组不变。

```
var a = ['a', 'b', 'c'];

a.slice(0) // ["a", "b", "c"]
a.slice(1) // ["b", "c"]
a.slice(1, 2) // ["b"]
a.slice(2, 6) // ["c"]
a.slice() // ["a", "b", "c"]

a.slice(-2) // ["b", "c"]
a.slice(-2, -1) // ["b"]

a.slice(4) // []
a.slice(2, 1) // []
```

slice()方法的一个重要应用，是将类似数组的对象转为真正的数组。

```
Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })
// ['a', 'b']

Array.prototype.slice.call(document.querySelectorAll("div"));
Array.prototype.slice.call(arguments);
```


#### 11. splice()

删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。

注意，该方法会改变原数组。

```
var a = ['a', 'b', 'c', 'd', 'e', 'f'];

a.splice(4, 2) // ["e", "f"]
a // ["a", "b", "c", "d"]

a.splice(4, 2, 1, 2) // ["e", "f"]
a // ["a", "b", "c", "d", 1, 2]

a.splice(-4, 2) // ["c", "d"]


var a = [1, 1, 1];
a.splice(1, 0, 2) // []
a // [1, 2, 1, 1]

var a = [1, 2, 3, 4];
a.splice(2) // [3, 4]
a // [1, 2]
```

#### 12. sort()

sort方法对数组成员进行排序，默认是按照字典顺序排序。

排序后，原数组将被改变。

```
['d', 'c', 'b', 'a'].sort()
// ['a', 'b', 'c', 'd']

[4, 3, 2, 1].sort()
// [1, 2, 3, 4]

[11, 101].sort()
// [101, 11]  数值会被先转成字符串，再按照字典顺序进行比较，所以101排在11的前面。

[10111, 1101, 111].sort()
// [10111, 1101, 111]  数值会被先转成字符串，再按照字典顺序进行比较，所以101排在11的前面。


[10111, 1101, 111].sort(function (a, b) {
  return a - b;  // 大于0，表示第一个成员排在第二个成员后面
})
// [111, 1101, 10111]
```

```
[
  { name: "张三", age: 30 },
  { name: "李四", age: 24 },
  { name: "王五", age: 28  }
].sort(function (o1, o2) {
  return o1.age - o2.age;
})
// [
//   { name: "李四", age: 24 },
//   { name: "王五", age: 28  },
//   { name: "张三", age: 30 }
// ]
```


#### 13. map()
运行结果组成一个新数组返回，原数组没有变化。

```
var numbers = [1, 2, 3];

numbers.map(function (n, index, numbers) {
  return n + 1;
});
// [2, 3, 4]

numbers
// [1, 2, 3]
```

map()方法的第二个参数，将回调函数内部的this对象，指向arr数组

```
var arr = ['a', 'b', 'c'];

[1, 2].map(function (e) {
  return this[e];
}, arr)
// ['b', 'c']
```

map()方法不会跳过undefined和null，但是会跳过空位

```
var f = function (n) { return 'a' };

[1, undefined, 2].map(f) // ["a", "a", "a"]
[1, null, 2].map(f) // ["a", "a", "a"]
[1, , 2].map(f) // ["a", , "a"]
```


#### 14. forEach()

如果数组遍历的目的是为了得到返回值，那么使用map()方法，否则使用forEach()方法。

forEach()方法无法中断执行，总是会将所有成员遍历完。如果希望符合某种条件时，就中断遍历，要使用for循环。


```
function log(element, index, array) {
  console.log('[' + index + '] = ' + element);
}

[2, 5, 9].forEach(log);
// [0] = 2
// [1] = 5
// [2] = 9
```

#### 15. filter()

满足条件的成员组成一个新数组返回。

该方法不会改变原数组。

```
[1, 2, 3, 4, 5].filter(function (elem) {
  return (elem > 3);
})
// [4, 5]
```

#### 16. some()，every()

返回一个布尔值，表示判断数组成员是否符合某种条件。

```
var arr = [1, 2, 3, 4, 5];
arr.some(function (elem, index, arr) {
  return elem >= 3;
});
// true 只要有一个满足就返回true
```

```
var arr = [1, 2, 3, 4, 5];
arr.every(function (elem, index, arr) {
  return elem >= 3;
});
// false  必须所有的都满足才返回true
```

注意，对于空数组，some方法返回false，every方法返回true，回调函数都不会执行。

```
function isEven(x) { return x % 2 === 0 }

[].some(isEven) // false
[].every(isEven) // true
```

#### 17. reduce()，reduceRight() 

reduce是从左到右处理（从第一个成员到最后一个成员）

```
[1, 2, 3, 4, 5].reduce(function (a, b) {
  console.log(a, b);
  return a + b;
})
// 1 2
// 3 3
// 6 4
// 10 5
//最后结果：15
```

如果要对累积变量指定初值，可以把它放在reduce方法和reduceRight方法的第二个参数。

```
[1, 2, 3, 4, 5].reduce(function (a, b) {
  return a + b;
}, 10);
// 25


function add(prev, cur) {
  return prev + cur;
}

[].reduce(add)
// TypeError: Reduce of empty array with no initial value
[].reduce(add, 1)
// 1
```

找出字符长度最长的数组成员

```
function findLongest(entries) {
  return entries.reduce(function (longest, entry) {
    return entry.length > longest.length ? entry : longest;
  }, '');
}

findLongest(['aaa', 'bb', 'c']) // "aaa"
```

#### 18. indexOf()，lastIndexOf()

indexOf方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1。

```
var a = ['a', 'b', 'c'];

a.indexOf('b') // 1
a.indexOf('y') // -1
```

indexOf方法还可以接受第二个参数，表示搜索的开始位置。

```
['a', 'b', 'c'].indexOf('a', 1) // -1
```

lastIndexOf方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回-1。

```
var a = [2, 5, 9, 2];
a.lastIndexOf(2) // 3
a.lastIndexOf(7) // -1
```

注意，这两个方法不能用来搜索NaN的位置，即它们无法确定数组成员是否包含NaN。

这是因为这两个方法内部，使用严格相等运算符（===）进行比较，而NaN是唯一一个不等于自身的值。

```
[NaN].indexOf(NaN) // -1
[NaN].lastIndexOf(NaN) // -1
```

#### 19. 链式使用

```
var users = [
  {name: 'tom', email: 'tom@example.com'},
  {name: 'peter', email: 'peter@example.com'}
];

users
.map(function (user) {
  return user.email;
})
.filter(function (email) {
  return /^t/.test(email);
})
.forEach(function (email) {
  console.log(email);
});
// "tom@example.com"
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

#### 3. with 语句

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

### 7. DOM

#### 7.1 appendChild/createElement/createTextNode

```
<!DOCTYPE html>
<html>
<body>

<ul id="myList"><li>Coffee</li><li>Tea</li></ul>

<p id="demo">请点击按钮向列表中添加项目。</p>

<button onclick="myFunction()">亲自试一试</button>

<script>
function myFunction() {
  var node=document.createElement("LI");
  var textnode=document.createTextNode("Water");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}
</script>

<p><b>注释：</b>首先创建 LI 节点，然后创建文本节点，然后把这个文本节点追加到 LI 节点。最后把 LI 节点添加到列表中。</p>

</body>
</html>
```

#### 7.2 createRange

一旦一个 Range 对象被建立，在使用他的大多数方法之前需要去设置他的临界点。

Range 接口表示一个包含节点与文本节点的一部分的文档片段

```
var range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);

```