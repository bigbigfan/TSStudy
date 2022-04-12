// Cat类型的tom可以赋值给Animal类型
interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}


let tom: Cat = {
    name: 'Tom',
    run: () => { console.log('run') }
};

let animal: Animal = tom; // tom可以赋值给Animal类型的animal，因为Cat类型兼容Animal类型



// console.log(animal); 
//这就突破了interface的限制了，在无propName情况下加了定义接口时不存在的属性



function testAnimal(animal: Animal) {
    return (animal as Cat);
}
function testCat(cat: Cat) {
    return (cat as Animal);
}
console.log(testAnimal(animal));
// console.log(testCat(cat));
























export default 0