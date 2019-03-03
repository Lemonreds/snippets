// 不使用TEMP 交换两个数

function swap(a, b) {

    // 计算2个值的差值
    a = a - b

    b = b + a
    a = b - a

    return [a, b]
}

console.log(swap(4,5))
console.log(swap(-1,5))