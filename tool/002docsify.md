## 侧边栏折叠

> https://docsify.js.org/#/zh-cn/configuration?id=onlycover

```
<script>
  window.$docsify = {
  ...
  loadSidebar: true // 添加该属性
  };
</script>
```

```
// 创建_sidebar.md 并 写以下格式

- 前端工程师
  - [规范](/frontend/rule.md)
  - [CSS](frontend/css.md)
  - [JavaScript](/frontend/javascript.md)
  - [TypeScript](/frontend/typescript.md)
  - [React](/frontend/react.md)
  - [Git](/frontend/git.md)
  - [Electron](/frontend/electron.md)
  - [Flutter](/frontend/flutter.md)
  - [概念](/frontend/concept.md)
- 后端工程师
  - [Nodejs](/backend/node.md)
  - [Docker](/backend/docker.md)
  - [Java](/backend/java.md)
- 工具
  - [Docsify](/tool/docsify.md)
```
请看效果图：

![效果图](../_media/zhediexiaoguo.jpg)