// 构造函数
var arr = new Array(2); // 等同于var arr = Array[2];
arr.length //2

//Array构造函数有一个很大的问题，就是不同的参数，会导致它的行为不一致。
// 无参数时，返回一个空数组
new Array() // []

// 单个正整数参数，表示返回的新数组的长度
new Array(1) // [ undefined ]
new Array(2) // [ undefined x 2 ]

// 非正整数的数值作为参数，会报错
new Array(3.2) // RangeError: Invalid array length
new Array(-3) // RangeError: Invalid array length

// 单个非正整数参数（比如字符串、布尔值、对象等），
// 则该参数是返回的新数组的成员
new Array('abc') // ['abc']
new Array([1]) // [Array[1]]

// 多参数时，所有参数都是返回的新数组的成员
new Array(1, 2) // [1, 2]
new Array('a', 'b', 'c') // ['a', 'b', 'c']


// bad
var arr = new Array(1, 2);

// good
var arr = [1, 2];

// Array.isArray()

var a = [1, 2, 3];

typeof a // "object"
Array.isArray(a) // true

// Array实例的方法

console.log(a.valueof()); // [1,2,3]
a = [1,3,4[2,43]]
console.log(a.toString()); //[1,3,4,2,43]

// push()数组末端添加元素
a.push(4);

// pop()数组末端删除元素，并返回，会改变原来数组
a.pop();

// join() 加入分隔符，返回字符串
console.log(a.log("!"));

// concat 多个数组合并,返回一个新的数组
a.concat([43,34]);
// shift() 删除数组第一元素，并返回，改变原来数组
while(item = a.shift()){
	console.log(item);
}

//unshift() :s数组头部添加元素，改变原数组，返回新的数组长度
a=[];
a.unshift([1,3,4]); // length 3

// reverse() 翻转数组 返回改变后的数组。注意，该方法将改变原数组。
a = [2,34,4];
a.reverse(); // 4,34,2

// slice():提取原数组的一部分返回新数组，原来数组不变
a = [2,4,5,6,7];
a.slice(0,3); // 2,4,5
a.slice(-1,-2); // 2
a.slice(-2); //4,5,6,7

// slice方法的一个重要应用，是将类似数组的对象转为真正的数组。

Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })
// ['a', 'b']

Array.prototype.slice.call(document.querySelectorAll("div"));
Array.prototype.slice.call(arguments);

//splice()
// splice方法用于删除原数组的一部分成员，并可以在被删除的位置添加入新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。


// sort方法不是按照大小排序，而是按照对应字符串的字典顺序排序。
//也就是说，数值会被先转成字符串，再按照字典顺序进行比较，所以101排在11的前面。
[10111, 1101, 111].sort(function (a, b) {
  return a - b;
})
// [111, 1101, 10111]

[
  { name: "张三", age: 30 },
  { name: "李四", age: 24 },
  { name: "王五", age: 28  }
].sort(function (o1, o2) {
  return o1.age - o2.age;
})