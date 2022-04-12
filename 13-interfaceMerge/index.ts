interface Alarm {
    price: number;
}
interface Alarm {
    weight: number;
}

let obj: Alarm = {
   price: 0,
   weight: 1
}

console.log(obj);







// type 和 interface 


// type可以定义类型别名，也可以定义基本类型，联合类型，元组
// type可以定义值的范围
// interface 可以定义对象的具体形状，或者函数，类


// 1， interface有接口合并 type没有
// 2， type可以定义基本类型，联合类型，元组   interface不行
// 3,  能用interface就用interface 不能就用type







export default 0