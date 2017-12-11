// error对象
// var err = new Error('出错了');
// if (error.name){
//   console.log(error.name + ": " + error.message);
// }

// function throwit() {
//   throw new Error('throwit');
// }

// function catchit() {
//   try {
//     throwit();
//   } catch(e) {
//     console.log(e.stack); // print stack trace
//   }finally{
//   	console.log("finally run"); // print stack trace
//   }
// }

// catchit();

// 自定义err
function UserError(message) {
   this.message = message || "默认信息";
   this.name = "UserError";
}

UserError.prototype = new Error();
UserError.prototype.constructor = UserError;