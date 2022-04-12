let arr: number[] = [1,2,3,4]
let fArr: Array<number> = [1,2,3,4] // 泛型
// arr.push('8') // push方法加入的类型也不能是定义之外的类型


console.log(arr);



interface numberArray {
    [index: number]: number
}

let f: numberArray = [1, 2 , 3, 4]

//接口也可以表示数组但是一般不这么做，例外是表示类数组


function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}


// any 在数组中的应用一个比较常见的做法是 用any表示数组允许出现任意类型

let anyArr: any[] = [1, '2', () => {}]