// 不使用TEMP 交换两个数

// 算术加减法
function swap(a, b) {

    a = a - b
    b = b + a
    a = b - a

    return [a, b]
}

// 异或
function swap(a, b) {

    a = a ^ b
    b = b ^ a
    a = a ^ b
    return [a, b]
}

console.log(swap(4, 5))
console.log(swap(-1, 5))