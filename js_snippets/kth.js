// 寻找数组第K大的元素
// example: [2,0,3,1] 

function findK(arr, k, start = 0, end = arr.length - 1) {

    if (k > arr.length) return -1

    if (start < end) {
        let index = partition(arr, start, end)

        if (index === k - 1)
            return arr[index]
        if (index > k - 1)
            return findK(arr, k, start, index - 1)
        if (index < k - 1)
            return findK(arr, k, index + 1, end)
    }
    return -1
}

function partition(arr, left, right) {

    let pivot = left,
        index = left + 1

    for (let i = index; i <= right; i++) {
        if (arr[i] <= arr[pivot]) {
            swap(arr, i, index)
            index++
        }
    }
    --index
    swap(arr, index, pivot)
    return index
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const arr = [1, 9, 7, 0, 3, 2, 4, 6, 5, 8]

console.log(findK(arr, 6))