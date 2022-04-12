// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。


// T代指调用时输入的任意类型  这样T在输出类型时候就可以使用
function createArray<T>(length: number, value: any): Array<T> {
    let result: T[] = [];
     for(let i = 0; i < length; i++) {
         result[i] = value
     }
     return result
}


const res = createArray(3, 'x')
console.log(res);

// 也可以定义多个泛型
function swap<T, U>(tuple: [T, U]): [U, T] {
   return [tuple[1], tuple[0]]
}

console.log(swap([7, 'swap']));

// 泛型约束
interface Lengthwise {
    length: number;
}
// 通过继承约束了泛型接收的参数必须符合 接口Lengthwise的形状
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
loggingIdentity([1,2,3]) // 此时必须要有length属性


// 多类型参数互相约束
function copyFields<T extends U, U>(target: T, source: U): T {
  for(let id in source) {
      target[id] = (<T>source)[id]
  }
  return target
}
let x = { a: 1, b: 2, c: 3, d: 4 };
console.log(copyFields(x, { b: 10, d: 20 }));

// 泛型接口
interface SearchFunc {
    (source: string, subString: string): boolean;
}





export default 0