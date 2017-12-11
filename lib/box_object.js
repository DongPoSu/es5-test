//包装对象的定义
// 所谓“包装对象”，就是分别与数值、字符串、布尔值相对应的Number、String、Boolean三个原生对象
var v1 = new Number(123);
var v2 = new String('abc');
var v3 = new Boolean(true);

// 包装对象实例的方法
// valueof() :valueOf方法返回包装对象实例对应的原始类型的值
console.log(new Number(123).valueof());
console.log(new String(123).valueof());
console.log(new Boolean(123).valueof());

//toString():方法返回实例对应的字符串形式
console.log(new String('12').toString());


//原始类型的自动转换
// 原始类型的值，可以自动当作对象调用，即调用各种对象的方法和参数。这时，JavaScript引擎会自动将原始类型的值转为包装对象，在使用后立刻销毁。
'123'.length;

// 自定义方法
String.prototype.double = function () {
  return this.valueOf() + this.valueOf();
};

'abc'.double();

Number.prototype.double = function () {
  return this.valueOf() + this.valueOf();
};

(123).double();

//Boolean 对象

