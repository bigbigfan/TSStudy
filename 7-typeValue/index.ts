// type字面量约束取值是能是某几个值的一种

// type arg = 1 | 2 | 3

interface arg {  
    num: number 
}

function add(a: arg) {
   return 2 + a.num
}

console.log(add({num: 2}));


