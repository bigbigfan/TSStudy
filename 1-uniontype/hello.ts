let myNum: string | number 

myNum = '123'

console.log(myNum.length); 

myNum = 123

// console.log(myNum.length); // error


// 联合类型被赋值之后会被推断成该确切的类型，之后在赋值其他类型会报错

