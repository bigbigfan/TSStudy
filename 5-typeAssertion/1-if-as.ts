// 类型断言（Type Assertion）可以用来手动指定一个值的类型。

interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function getName(animal: Cat | Fish) {
    return animal.name;
}
// 有时候确实需要在不确定类型的时候就访问一个类型特有的属性或方法
// 需要断言该逻辑的类型

function isFish(animal: Cat | Fish) {
      if(typeof (animal as Fish).swim  === 'function') {
          return true
      }
      return false
}
// 类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：


export default 0

 

