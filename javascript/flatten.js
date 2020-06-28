function flatten(arr) {

    if (!Array.isArray(arr)) return arr

    return arr.reduce((pre, current) => pre.concat(Array.isArray(current) ? flatten(current) : current), [])

}

console.log(flatten([1, 2, 3, [4, 5, 6], 7, [8, 9, 10],
    [
        [1, 23, 4],
        [123]
    ]
]))