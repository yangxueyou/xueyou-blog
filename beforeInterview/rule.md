# 1.常量管理

## 局部管理

在当前文件夹立创建constants.js文件

```
//  constants.js
// 使用：import { list } from "./constants";

const list = [
    {a: 1},
    {b: 2}
];

export default {
  list, // 列表过滤数据结构
}

```

## 全局管理

在common文件夹下创建constants文件夹

```
//  list.js

const list = [
    {a: 1},
    {b: 2}
];

export default {
  list, // 列表过滤数据结构
}


```

```
// common/constants/index.js 该文件作为转发聚合
// 使用：import { list } from "common/constants/index"; // 需要配合路径别名


export { list } from './list'; // 首页 -- 列表管理 -- 列表表头

```

