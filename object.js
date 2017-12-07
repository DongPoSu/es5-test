var a = {
	'p':'xab',
	p:'xab'
}

var b = {
	' 1':'x',
	'1 1':'1 1',
	// 1 1:'1'	// 不符合命规则的键名必须加引号
}


var c = {
	c1:'cxc',
	c2:b,
	c3:'cxc',
}
console.log(c.c1);
console.log(c['c2']);

// key在对象中
console.log('c2' in c);
console.log('c1' in c);

// 遍历所有属性
for (var i in c) {
	console.log(c[i]);
}

delete c.c3;

var o = {p1:null};
with (o) {
  p1 = 1;
  p2 = 2;
}
console.log(o.p1);

var o = {
  name: 'Alice'
};

var p = [];

with (o) {
  p.push('Hello ', name, '!');
};

p.join('') // "Hello Alice!"