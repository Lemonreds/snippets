/**
 * @method 选择排序
 * @param {Array} arr
 * @时间复杂度 O(n^2)
 * @空间复杂度 O(1) 
 */

// 寻找最小值
function selectSort(arr) {

    if (Object.prototype.toString.call(arr) !== '[object Array]') return arr;

    const swap = (arr, i, j) => {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    let min

    for (let i = 0; i < arr.length - 1; i++) {

        min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        swap(arr, i, min)
    }
    return arr
}


const arr = [9, 5, 6, 7, 2, 1, 0, 2, 6, 3, 4, 7]
console.log(selectSort(arr))


// 寻找最大值
function reverseSelectSort(arr) {

    if (Object.prototype.toString.call(arr) !== '[object Array]') return arr;

    const swap = (arr, i, j) => {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    let max

    for (let i = arr.length - 1; i >= 0; i--) {

        max = i
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[max]) {
                max = j
            }
        }
        swap(arr, i, max)
    }
    return arr
}

const arr1 = [9, 5, 6, 7, 2, 1, 0, 2, 6, 3, 4, 7]
console.log(reverseSelectSort(arr1))