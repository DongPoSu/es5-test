// Date对象是JavaScript提供的日期和时间的操作接口。
//它可以表示的时间范围是，1970年1月1日00:00:00前后的各1亿天（单位为毫秒）。

// 当前时间依赖于地区
console.log(Date()); 

// Date对象接受从1970年1月1日00:00:00 UTC开始计算的毫秒数作为参数。
//这意味着如果将Unix时间戳（单位为秒）作为参数，必须将Unix时间戳乘以1000
console.log(new Date()); 
console.log(new Date(3600 * 24 * 1000));

console.log(new Date('2014-01-01'));
// Wed Jan 01 2014 08:00:00 GMT+0800 (CST)

console.log(new Date('2014-1-1'));
// Wed Jan 01 2014 00:00:00 GMT+0800 (CST)

new Date('2014-12-11')
// Thu Dec 11 2014 08:00:00 GMT+0800 (CST)

new Date('2014/12/11')
// Thu Dec 11 2014 00:00:00 GMT+0800 (CST)

// new Date(year, month [, day, hours, minutes, seconds, ms])
new Date(2013, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)

new Date(2013, 0, 1)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)

new Date(2013, 0, 1, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)

new Date(2013, 0, 1, 0, 0, 0, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)

//Date对象的静态方法
Date.now() // 1364026285194
// window.performance.now() // 21311140.415


//Date.parse()
// Date.parse方法用来解析日期字符串，返回距离1970年1月1日 00:00:00的毫秒数。
// 标准的日期字符串的格式，应该完全或者部分符合RFC 2822和ISO 8061，
// 即YYYY-MM-DDTHH:mm:ss.sssZ格式，其中最后的Z表示时区。


Date.parse('January 26, 2011 13:51:50')
Date.parse('Mon, 25 Dec 1995 13:30:00 GMT')
Date.parse('Mon, 25 Dec 1995 13:30:00 +0430')
Date.parse('2011-10-10')
Date.parse('2011-10-10T14:48:00')

//Date.UTC()
Date.UTC();

// 格式
// Date.UTC(year, month[, date[, hrs[, min[, sec[, ms]]]]])

// 用法
Date.UTC(2011, 0, 1, 2, 3, 4, 567)
// 1293847384567


// Date实例对象的方法
/*
to类：从Date对象返回一个字符串，表示指定的时间。
get类：获取Date对象的日期和时间。
set类：设置Date对象的日期和时间。
*/

//Date.prototype.toString()
console.log(new Date().toString());