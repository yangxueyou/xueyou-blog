

> https://juejin.cn/post/6844904144780820493


> https://juejin.cn/post/6844904016082632711


> https://jishuin.proginn.com/p/763bfbd54ab4


> https://juejin.cn/post/6844903510211821581



## antd onFinish={onFinish} Form

当执行onFinish函数的时候，如果这个函数里面执行setState1和setState2

reactHooks不会合并执行，下面的useEffect会执行两次


```
useEffect(() => {
    // 这里面会执行两次
},[state1, state2])
```

> https://codesandbox.io/s/duo-biao-dan-lian-dong-antd-4-16-13-forked-92frw?file=/index.js


解决办法1: 不使用antd自带的这个方法，在按钮上加onClick事件