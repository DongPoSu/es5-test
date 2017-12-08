// 强制转换

/*Number()
调用对象自身的valueOf方法。如果返回原始类型的值，则直接对该值使用Number函数，不再进行后续步骤。
 如果valueOf方法返回的还是对象，则改为调用对象自身的toString方法。如果toString方法返回原始类型的值，则对该值使用Number函数，不再进行后续步骤。
如果toString方法返回的是对象，就报错。
*/ 
console.log(Number('a')) // NaN
console.log(Number('1')) // 1
console.log(Number('1a')) // NaN
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN
console.log(Number(true)) // NaN
var a = {'p':'p'};
console.log(Number(a));


/*
	String()
先调用对象自身的toString方法。如果返回原始类型的值，则对该值使用String函数，不再进行以下步骤。

如果toString方法返回的是对象，再调用原对象的valueOf方法。如果valueOf方法返回原始类型的值，则对该值使用String函数，不再进行以下步骤。

如果valueOf方法返回的是对象，就报错。
*/

console.log(String('a')) // a
console.log(String('1')) // 1
console.log(String('1a')) // 1a
console.log(String(null)) // null
console.log(String(undefined)) // undefined
console.log(String(true)) // true
console.log(String(a)); // [object,Object]


/*
	Boolean()除了下面其他都为true
	undefined
null
-0
0或+0
NaN
''（空字符串）
*/

console.log(Boolean('a')) // true
console.log(Boolean(a)); // true
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(0)) // false


//自动转换
//下三种情况时，JavaScript会自动转换数据类型，即转换是自动完成的，对用户不可见
// 1. 不同类型的数据互相运算
123 + 'abc' // "123abc"

// 2. 对非布尔值类型的数据求布尔值
if ('abc') {
  console.log('hello')
}  // "hello"

// 3. 对非数值类型的数据使用一元运算符（即“+”和“-”）
+ {foo: 'bar'} // NaN
- [1, 2, 3] // NaN