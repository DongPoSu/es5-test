var a = 'abc';
console.log(a[1]); // a
console.log(a[2]); // b
console.log(a[4]); // undefined

console.log(a.length); 

// base64
function b64Encode(str) {
  return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
  return decodeURIComponent(atob(str));
}

b64Encode('你好') // "JUU0JUJEJUEwJUU1JUE1JUJE"
b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE') // "你好"