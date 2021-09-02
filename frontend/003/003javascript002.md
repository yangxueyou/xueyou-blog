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

