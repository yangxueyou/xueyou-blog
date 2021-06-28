## 基础

### 1. 父组件获取子组件的值

```
// parent.js

import React, { Component } from 'react';
import Child from './child';
class Parent extends Component {
    <Child
        onPush = (type) => {
            // 调用子的值和方法都可以
            console.log(type)
        }
    />
}
```
```
// child.js

import React, { Component } from 'react'
class Child extends Component {
    constructor(props) {
        super(props)

        this.state = {
            age: 18,
        }
    }
    render() {
        const { onPush } = this.props;
        const { age } = this.state;
        return <button onClick={() => { onPush(age) }}> 点击 </button>
    }
}
```


### 2. ref

## class

### 1. React中setState是同步的还是异步

> https://juejin.cn/post/6844903636749778958


## hooks