## 官网

> http://momentjs.cn/

## 当日时间默认值

把当天时间设置为8:0:0

moment().millisecond(0).second(0).minute(0).hour(8)


## 获取当前时间

```
 moment().format('YYYY-MM-DD HH:mm:ss');获取当前时间 2021-09-16 20:54:41

 moment().format('L') 09/16/2021

 moment().format('LL') September 16, 2021

 moment().format('LLL') September 16, 2021 8:53 PM

 moment().format('LLLL') Thursday, September 16, 2021 8:51 PM

 moment().format('X'); 转换当前时间的Unix时间戳  --> 1631796683

 moment().format('d');  今天是周几  --> 4
```


## 时间和时间戳

```
var time = new Date();      -- Thu Sep 16 2021 21:00:10 GMT+0800 (中国标准时间)

var timeStamp = Date.parse(time); -- 1631797210000  （Date.parse() 默认不取毫秒，即后三位毫秒为0）


moment(time).valueOf();     -- 1631799145962  moment 时间 转 时间戳

moment(timeStamp).format();     -- 2021-09-16T21:34:28+08:00  moment 时间戳 转 时间  
```

## 时间转换为毫秒数

- Date.parse() YYYY-MM-DDTHH:mm:ss.sssZ

该方法返回的毫秒值后三位全为0，精确到秒数，没有毫秒数

```
Date.parse('Aug 9, 1995')
Date.parse('January 26, 2011 13:51:50')
Date.parse('Mon, 25 Dec 1995 13:30:00 GMT')
Date.parse('Mon, 25 Dec 1995 13:30:00 +0430')
Date.parse('2011-10-10')
Date.parse('2011-10-10T14:48:00')
```

- Date.UTC()

Date.UTC方法接受年、月、日等变量作为参数，返回该时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数。

这些参数中只有前两个参数是必需的。

```
// 格式
Date.UTC(year, month[, date[, hrs[, min[, sec[, ms]]]]])

// 用法
Date.UTC(2011, 0, 1, 2, 3, 4, 567)
// 1293847384567


Date.UTC(12)
NaN
 
Date.UTC(2013,4,11);
1368230400000
```


- valueOf()

该方法返回日期的毫秒表示，可以方便时间的比较，该方法返回的毫秒数精确到毫秒

```
var  date =  new  Date();
date.valueOf();
// 1368283579633
```


- getTime()

返回表示日期的毫秒数，与valueOf()返回的值相同，也精确到毫秒数。

```
var  date =  new  Date();
date.getTime();
// 1368283691951
```