class Person {
    name:string
    constructor(name: string) {
       this.name = name
    }
}


interface p extends Person {
    favorite: string
}

let wzf: p = {
    name: 'wzf',
    favorite: 'haha'
}

console.log(wzf);





export default 0






