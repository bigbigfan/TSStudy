

// (globalThis as any).cache = {
//     name: 'tom',
//     run:() => {console.log('runnnn')}
// }


(globalThis as any).cache = {
   
}




function getCacheData(key: string): any {
    return (globalThis as any)[key];
}

interface Cat {
    name: string,
    run: void
}

const t = getCacheData('cache') as Cat
console.log(t);


// 断言成cat 这样有利于后续代码补全


export default 0
