function combine(arr1, arr2) {

    let result = []

    while (arr1.length > 0 && arr2.length > 0) {
        result.push(arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift())
    }
    return result.concat(arr1, arr2)
}

console.log(combine([1, 3, 5, 7, 9, 11], [2, 4, 6, 8, 10]))