function f(){
	console.log("f()");
}
f();

var b = function (){
	console.log("b()");
}
b();

var c = function x(){

	console.log("c()");
	//x(); // 只能在函数内部调用
	
}

c();


var d  = new Function('x','y','console.log(x+y)');
d(1,1);

console.log(d.name);
console.log(d.length);
console.log(d.toString());

// 参数
var p ={'x':'xxxxxx'};
function arg(arg) {
	arg = {'b':'b'}; // 传入值不受影响
}
arg(p);
console.log(p);


function test(g,h,t){
	for(var i in arguments){
		console.log(arguments[i]);
	}
}
test('g','h','t');

// 闭包


function f1(y){
	
	return function f2(){
		console.log('y:'+y++);
	}
}
var ref = f1(1);
ref();
ref();
ref();