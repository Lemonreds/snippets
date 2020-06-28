// 非递归
function binarySearch(arr, val) {

    if (!Array.isArray(arr)) return

    let start = 0,
        end = arr.length - 1

    while (start <= end) {

        let middle = parseInt((start + end) / 2)

        if (arr[middle] < val) {
            start = middle + 1
        } else if (arr[middle] > val) {
            end = middle - 1
        } else return middle
    }
    return -1
}
const arr1 = [15, 36, 102, 187]
console.log(binarySearch(arr1, 102))


// 递归
function binarySearch(arr, val, start = 0, end = arr.length - 1) {

    let middle = parseInt((start + end) / 2)

    if (arr[middle] === val) {
        return middle
    }

    if (arr[middle] > val) {
        return binarySearch(arr, val, start, middle - 1)
    }

    if (arr[middle] < val) {
        return binarySearch(arr, val, middle + 1, end)
    }

    return -1
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
console.log(binarySearch(arr, 10))