### 1. node环境和chrome运行环境的区别

NodeJS环境和浏览器环境一样都是一个**JS的运行环境**, 都可以执行JS代码，但是由于**宿主不同**, 所以特点也有所不同

- **内置对象不同**

浏览器环境中提供了window全局对象

NodeJS环境中的全局对象不叫window, 叫global

- **this默认指向不同**

浏览器环境中全局this默认指向window

NodeJS环境中全局this默认指向空对象{}

- **JS引擎不完全一样**

Nodejs是基于Chrome's JavaScript runtime，也就是说，实际上它是对GoogleV8引擎（应用于Google Chrome浏览器)进行了封装。

- **API不同**

浏览器环境中提供了操作DOM和BOM相关的API

- **I/O读写**

与浏览器不同，我们需要像起他服务端技术一样读写文件，NodeJS提供了比较方便的组件。

而浏览器想在页面中直接打开一个本地的图片就麻烦了好多，而这些node都用一个组件搞定了。