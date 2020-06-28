/**
 * @method 快速排序
 * @param {Array} arr
 * @时间复杂度 O(n*log2(n))
 * @空间复杂度 O(1) 
 */
function quickSort(arr, left = 0, right = arr.length - 1) {

    let partIndex

    if (left < right) {
        partIndex = partition(arr, left, right)
        quickSort(arr, left, partIndex - 1)
        quickSort(arr, partIndex + 1, right)
    }
    return arr
}

// 分区操作
function partition(arr, left, right) {

    let pivot = left,
        index = left + 1

    const swap = (arr, i, j) => {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, index, i)
            index++
        }
    }
    swap(arr, pivot, index - 1)
    return index - 1
}

const arr = [7, 45, 46, 102, 450, 63, 12, 47, 0, 2, 15, 6, 3, 9, 715, 2]
console.log(quickSort(arr))