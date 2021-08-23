

// =========================    js


async await是有传染性的 —— 当一个函数变为async后，这意味着调用他的函数也需要是async







// ==========================   react 源码解析
concurrent mode 并发模式

reconciliation 协调（diff算法）


schedule 调度。 scheduler

render 协调  要改变哪些视图。 reconciler。 fiber

这样到commit阶段就可以提交到对应的平台上

因为只有commit阶段与平台有关，所以render对应的不是dom

commit 渲染。 renderer。  ReactDOM。ReactNative。ReactArt



classComponent和function Component有非常大的区别。 不一定对卡松



schedule 调度 scheduler 小顶堆。 


render阶段。深度优先遍历。 update — 单项链表  


lane模型。调度优先级。 二进制


探索前端的边界