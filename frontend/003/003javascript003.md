## 1. 深度优先遍历

TODO：


## 2. addEventListener  的第三个参数

- false为冒泡事件

- true为捕获事件

- capture 事件捕获阶段传播到该EventTarget 时触发

- once 表示listener在添加之后最多只调用一次。如果是 true，listener会在其被调用之后自动移除。

- passive 表示listener永远不会调用preventDefault()。如果listener仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。



## 3. appendChild/createElement/createTextNode

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

## 4. createRange

一旦一个 Range 对象被建立，在使用他的大多数方法之前需要去设置他的临界点。

Range 接口表示一个包含节点与文本节点的一部分的文档片段

```
var range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);

```


## 5. event loop

下面主要讲的是 浏览器，还有待确定

> https://juejin.cn/post/6844903476527366151