123e3 // 123000
123e-3 // 0.123
-3.1E+12
.1e-23

console.log(1234567890123456789012);

// 多进制表示
console.log(0xff);

// 特殊值
//正零负零
console.log(-0===+0); // true
console.log(-0==+0); //true
console.log((-0).toString()); // '0'

// NaN
console.log(typeof NaN); // Number
console.log(NaN === NaN); // false
console.log([NaN].indexOf(NaN)); // -1
console.log(NaN + NaN); // NaN
console.log(NaN + 2); // NaN
console.log(isNaN(NaN)); // true isNaN() = isNaN(Number(x))
console.log(isNaN([1])); // false
console.log(isNaN(['we'])); // true
console.log(isNaN([1,2])); // true


// parseInt()
console.log(parseInt("1.24xs"));
