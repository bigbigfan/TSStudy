// 接口一般首字母大写   
interface Person {
    name: string;
    age: number; //  ？ 可选属性
    [propName: string]: string | number;  // 可接收额外的属性
}


let tom: Person = {
    name: 'Tom',
    age: 25,
    cat: 'tom'
};

console.log(tom);


// 1,用于定义对象，对象内部具体内容和数据类型
// 2，用? 表示可选的属性
// 3，用propsName表示可新添加的属性，以及属性的类型。如果定义了某种类型，则不能有其他不同的类型的属性定义。
// 4，使用联合类型可以定义多类型接口

