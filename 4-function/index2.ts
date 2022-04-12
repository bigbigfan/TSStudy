// 剩余参数


function push(arr: any[], ...items: any[]) {
    items.forEach((item) => {
        arr.push(item);
    });
}

let a: any[] = [1, 2, 3]
push(a, 4, 5 ,6)


// 重载，分清函数的入参情况

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if(typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''))
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('')
    }
};


console.log(reverse('123'));



