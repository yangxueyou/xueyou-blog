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



