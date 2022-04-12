interface Cat {
    name: string,
    run(): void
}

interface Fish {
    name: string,
    swim(): void
}

function say(ani: Cat | Fish) {
    (ani as Fish).swim() // 欺骗了ts，断言成了fish，会报错
}

say({name: 'tom', run: () => console.log('i can run')})

















export default 0