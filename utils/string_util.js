// base on es5

/*
   检查是否为字符串 
*/
function isStr(s){
    return typeof s ===  typeof ''; 
}


/*
    检查是否为undefined
*/
function isUndefined(s){
    return typeof s == typeof undefined; 
}

/*
    字符串是否为空：undefined，null,空 返回false.
    非string类型返回true
*/
function isBlank(s){
    return !isUndefined(s) && String(s) !== null && String(s) !== ''
}


/*
    字符串是否为空：undefined，null,空 返回false.
    非string类型返回true
*/
function isStrictBlank(s){
    return isStr(s) && String(s) !== null && String(s) !== ''
}



/*
    获取UUID
*/