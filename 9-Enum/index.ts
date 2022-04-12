// 按照枚举的成员排序从0-1赋值，也可以手动赋值  只读
// enum Days {Sun, Mon, Tue, Wed, Thu, Fri = 3, Sat};



// // 手动赋值之后的数据会接着上一个枚举成员递增
// console.log(Days.Sat);  // 4
// console.log(Days.Wed, Days.Fri); // ts不会察觉到修改后重复的枚举 // 3   3
// console.log(Days[3]); // Fri 覆盖了 Wed


// // 不一定是数字，可以用断言改变值
// enum Days2 {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S"};

// console.log(Days2.Sat);


// // 可以是 常数项或者是计算所得项 但是计算所得项后面跟未手动赋值的项就会报错

// enum Color {Red, Green, Blue = "blue".length, Yellow = 3};

// console.log(Color.Blue);


const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
console.log(directions);


export default 0