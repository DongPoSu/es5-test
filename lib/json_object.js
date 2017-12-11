
// Json格式
var j = ["one", "two", "three"];
console.log(j);
j = {a:1}
console.log(j);
console.log(typeof j); // object


j = { name: "张三", 'age': 32 }  // 属性名必须使用双引号

// [32, 64, 128, 0xFFF] // 不能使用十六进制值

// { "name": "张三", "age": undefined } // 不能使用undefined

// { "name": "张三",
//   "birthday": new Date('Fri, 26 Aug 2011 07:13:10 GMT'),
//   "getName": function() {
//       return this.name;
//   }
// } // 不能使用函数和日期对象


// Json.stringify();
// JSON.stringify方法用于将一个值转为字符串。
//该字符串符合 JSON 格式，并且可以被JSON.parse方法还原

console.log(JSON.stringify('123'));
console.log(JSON.stringify(j));
console.log("\"a\""); // "a"
console.log("a"); // a

// JSON.stringify方法还可以接受一个数组，作为第二个参数，指定需要转成字符串的属性。
var obj = {
  'prop1': 'value1',
  'prop2': 'value2',
  'prop3': 'value3'
};

var selectedProperties = ['prop1', 'prop2'];

console.log(JSON.stringify(obj, selectedProperties));


//第二个参数还可以是一个函数，用来更改JSON.stringify的默认行为。

function f(key, value) {
  if (typeof value === "number") {
    value = 2 * value;
  }
  return value;
}

JSON.stringify({ a: 1, b: 2 }, f)
// '{"a": 2,"b": 4}'

// toJSON 方法


//JSON.parse();

var o = JSON.parse('{"name": "张三"}');
o.name // 张三


// 
console.log(JSON.stringify({"name":undefined})); // {}
console.log(JSON.stringify([undefined])); // [null]
var obj = {};
//JSON.stringify方法会忽略对象的不可遍历属性。
Object.defineProperties(obj, {
  'foo': {
    value: 1,
    enumerable: true
  },
  'bar': {
    value: 2,
    enumerable: false
  }
});