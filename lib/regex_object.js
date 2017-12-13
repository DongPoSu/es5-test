var  regex= /xyz/;
var regex = new RegExp('xyz');
// 正则对象属性和方法
//属性
//ignoreCase：返回一个布尔值，表示是否设置了i修饰符，该属性只读。
// global：返回一个布尔值，表示是否设置了g修饰符，该属性只读。
// multiline：返回一个布尔值，表示是否设置了m修饰符，该属性只读。

regex.lastIndex // 0
regex.source // "abc"

// test()
/test/.test('test232');

// exec()
/test/.exec("test2323test");



// 字符串对象的方法
// String.prototype.match()
var s = '_x_x';
var r1 = /x/;
var r2 = /y/;

s.match(r1) // ["x"]
s.match(r2) // null

// String.prototype.search()
s.search(r)

// String.prototype.replace()
// str.replace(search, replacement)
'hello world'.replace(/(\w+)\s(\w+)/, '$2 $1');

//String.prototype.split()
//str.split(separator, [limit])
// 非正则分隔
'a,  b,c, d'.split(',')
// [ 'a', '  b', 'c', ' d' ]

// 正则分隔，去除多余的空格
'a,  b,c, d'.split(/, */)
// [ 'a', 'b', 'c', 'd' ]

// 指定返回数组的最大成员
'a,  b,c, d'.split(/, */, 2)
[ 'a', 'b' ]


// 4.匹配规则
//4.1 字面量字符和元字符
//4.2 转义符
//4.3 特殊字符
// 4.4 字符类
// 4.5 预定义模式
// 4.6 重复类
// 4.7 量字符
// 4.8 贪婪模式
// 4.9 修饰符