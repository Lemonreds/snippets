/**
 * @method 插入排序
 * @param {Array} arr
 * @时间复杂度 O(n^2)
 * @空间复杂度 O(1) 
 */
function insertion(arr) {
    if (!arr instanceof Array) return arr

    let preIndex, current

    for (let i = 1; i < arr.length; i++) {
        current = arr[i]
        preIndex = i - 1

        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex--
        }
        arr[preIndex + 1] = current
    }
    return arr
}

console.log(insertion([9, 8, 7, 5, 3, 4, 0, 6, 4, 5, 20, 6, 4, 97, 5, 1, 6, 46, 4, 13]))