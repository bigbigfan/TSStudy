const mySum:(x: number, y: number ) => number = (x: number, y: number = 3):number =>  x + y

console.log(mySum(1, 2));

// ts内部的 => 用来表示函数定义的输入和输出类型 


interface Func {
  (a: string, b?: string): boolean  
}


let mySearch : Func

mySearch = function(a: string = '1', b: string) {
    return true
} 


console.log(mySearch('1', '2'));

// 可以用 ？表示可选参数，但是可选参数后面不允许放必需参数


// 但是也可以用es6 默认值参数来表示，它会被ts识别为可选参数并且也不会有参数排列的限制


