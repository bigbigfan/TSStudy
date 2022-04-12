// 1, 类定义： 定义了一件事物的抽象特点，包含他的属性和方法
// 2, 类的实例 通过new生成
// 3，面向对象的3大特性： 封装 ， 继承， 多态
// 4，外界无需或者不知道数据的操作细节，只暴露对外的接口
// 5，继承： 子类继承父类的所有属性和方法，还可以添加独有的属性和方法
// 6，多态：继承产生不同的类，可以实现自己独特的方法
// es6对于类的属性是this.xxx     es7可以直接 [propertyName]: xxx
//  static 不光可以定义静态方法 也可以定义静态属性

class Animal {
    public name: any;
    constructor(name) {
      this.name = name;
    }
  }
  
  let a = new Animal('Jack');
  console.log(a.name); // Jack
  a.name = 'Tom';
  console.log(a.name); // Tom
  
  


export default 0

