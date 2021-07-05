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


## 最佳实践

### React中拖放的实现

1. 如何使用React的鼠标事件系统

2. 如何判断拖放开始和结束

3. 如何实现拖放元素的位置移动

4. 拖放状态在组件中如何维护

自己实现：

> https://hd1h2.csb.app/#/react-dnd

已有库：

> https://github.com/atlassian/react-beautiful-dnd