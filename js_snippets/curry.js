function add(a, b, c, d, e, f) {
    return a + b + c + d + e + f
}

function curry(fn, args = []) {
    let length = fn.length
    // console.log(args)
    return (..._args) => {

        let allArgs = args.concat(_args)

        if (allArgs.length === length) return fn.apply(this, allArgs)
        else return curry(fn, allArgs)
    }
}

// 普通curry
let addCurry = curry(add)

console.log(addCurry(1, 2, 3, 4, 5, 6))
console.log(addCurry(1, 2, 3)(4)(5, 6))
// 带参数curry
let addCurry2 = curry(add, [1, 2])

console.log(addCurry2(3, 4, 5, 6))
console.log(addCurry2(3)(4)(5, 6))


function add2(...params) {
    console.log(params)
    return params.reduce((prev, current) => (
        prev + current
    ), 0)
}

function curry2(fn, args = []) {

    return (...params) => {
        if (params.length === 0) return fn(...args, ...params)
        else return curry2(fn, [...args, ...params])
    }

}
// 任意参数长度curry
let addCurry3 = curry2(add2)

console.log(addCurry3(3, 4, 5, 6)())
console.log(addCurry3(3)(4)())