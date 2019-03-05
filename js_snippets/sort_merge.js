
/**
 * @method 归并排序
 * @param {Array} arr
 * @时间复杂度 O(nlogn)
 * @空间复杂度 O(nlogn) 
 */
function mergeSort(arr) {
    if (!Array.isArray(arr)) return;
    if (arr.length < 2) return arr;

    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(arr1, arr2) {

    let res = []

    while (arr1.length && arr2.length) {
        if (arr1[0] <= arr2[0]) {
            res.push(arr1.shift())
        } else {
            res.push(arr2.shift())
        }
    }

    while (arr1.length) {
        res.push(arr1.shift())
    }
    while (arr2.length) {
        res.push(arr2.shift())
    }

    return res
}

const arr = [3, 4, 51, 6, 213, 51, 5, 634, 7, 0, 7, 31, 1]

console.log(mergeSort(arr))