### 1. 深度优先遍历


### 2. JS获取对象数组特定key对应的值数组

```
function getMappingValueArrayOfKey(array,keyName){
	if(Object.prototype.toString.call(array)=='[object Array]'){
		return array.map((item,index)=>{
			return item[keyName]
		})
	}
	return 'null（参数一应为对象数组）';//不是数组
}

const animals=[{name:'dog',sound:'汪汪'},{name:'pig',sound:'哼哼'},{name:'cat',sound:'喵喵'}]

console.log(getMappingValueArrayOfKey(animals,'name'));//["dog", "pig", "cat"]
console.log(getMappingValueArrayOfKey(animals,'sound'));//["汪汪", "哼哼", "喵喵"]

```


### addEventListener  的第三个参数

- false为冒泡事件

- true为捕获事件

- capture 事件捕获阶段传播到该EventTarget 时触发

- once 表示listener在添加之后最多只调用一次。如果是 true，listener会在其被调用之后自动移除。

- passive 表示listener永远不会调用preventDefault()。如果listener仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。