/**
 * @method 冒泡排序
 * @param {Array} arr
 * @时间复杂度 O(n^2)
 * @空间复杂度 O(1) 
 */
function bubble(arr) {

    if (!Array.isArray(arr)) return arr;

    const swap = (arr, i, j) => {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr
}

console.log(bubble([1, 8, 9, 8, 7, 1, 6, 10, 54, 7, 1, 3, 65, 47]))