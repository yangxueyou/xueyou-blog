## 1.常量管理

### 局部

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

### 全局

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


## 2. Git提交规范

### 历史分析

好处：

- `方便快速浏览查找，回溯之前的工作内容`

- `可以直接从commit 生成Change log(发布时用于说明版本差异)`

问题：

- `每个人风格不同，格式凌乱，查看很不方便`

- `部分commit没有填写message，事后难以得知对应修改的作用`


### 规范方式


为了实现规范，我们使用 **[commitlint](https://commitlint.js.org/#/)**  和  **[husky](https://github.com/typicode/husky)**   来进行提交检查，当执行git commit时会在对应的git钩子上做校验，只有符合格式的Commit message才能提交成功。


为了方便使用，增加了  **[commitizen](https://github.com/commitizen/cz-cli)**  支持，使用  **[cz-customizable](https://github.com/leoforfree/cz-customizable)**  进行配置。支持使用git cz替代git commit。


**如果要推行代码规范，也可以使用husky来在其他的Git钩子(如pre-push等)上进行eslint等校验。**


### Commit message 格式

```
<type>(<scope>): <subject>
// 注意冒号 : 后有空格
// 如 feat(miniprogram): 增加了小程序模板消息相关功能
```


**scope**选填表示commit的作用范围，如数据层、视图层，也可以是目录名称 **subject**必填用于对commit进行简短的描述 **type必填**表示提交类型，值有以下几种：



- feat - 新功能 feature
- fix - 修复 bug
- docs - 文档注释
- style - 代码格式(不影响代码运行的变动)
- refactor - 重构、优化(既不增加新功能，也不是修复bug)
- perf - 性能优化
- test - 增加测试
- chore - 构建过程或辅助工具的变动
- revert - 回退
- build - 打包
