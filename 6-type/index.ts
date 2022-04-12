type Name = string;  // string类型
type NameResolver = () => string;  // 函数类型
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}

console.log(getName(() => 'hahah'));

