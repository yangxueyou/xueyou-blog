> https://github.com/yangxueyou/electron

## 单一进程

Electron（Chromium）为什么不是:

虽然这种模式意味着您打开每个标签页的开销较少，但也同时意味着一个网站的崩溃或无响应会影响到整个浏览器。

## 多进程模式

### 主进程

1. 每个 Electron 应用都有一个单一的主进程，作为应用程序的入口点。 

2. 主进程在 Node.js 环境中运行，这意味着它具有 require 模块和使用所有 Node.js API 的能力。

#### 窗口管理

**主进程** 的主要目的是使用 **BrowserWindow** 模块创建和管理应用程序窗口。

### 渲染进程

1. 渲染器负责 渲染 网页内容

2. 每个 Electron 应用都会为每个打开的 BrowserWindow ( 与每个网页嵌入 ) 生成一个单独的渲染器进程

#### 规范

- 以一个 HTML 文件作为渲染器进程的入口点。

- 使用层叠样式表 (Cascading Style Sheets, CSS) 对 UI 添加样式。

- 通过 `<script>` 元素可添加可执行的 JavaScript 代码。