
  
  interface CreateArrayFunc<T> {
    (length: number, value: T): Array<T>;
  }


  let createArray:CreateArrayFunc<string> = function<T>(length: number, value: T) {
    let result: Array<T> = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
   }

  console.log(createArray(3, '1231')) // ['x', 'x', 'x']



  









  export default 0