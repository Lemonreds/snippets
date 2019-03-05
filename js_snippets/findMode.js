const arr = [0, 1, 2, 3, 3, 4, 5, 3, 3, 6, 5, 4, 3, 3, 3, 3, 3, 5, 6] // 3


function find(arr, start = 0, end = arr.length - 1, middle = Math.floor((start + end) / 2)) {

    if (start < end) {
        index = partition(arr, start, end)
        if (index === middle) return arr[index]
        if (index > middle) return find(arr, start, index - 1, middle)
        if (index < middle) return find(arr, index + 1, end, middle)
    }
    return -1
}

function partition(arr, left, right) {

    let pivot = left,
        index = left + 1

    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            [arr[i], arr[pivot]] = [arr[pivot], arr[i]]
            index++
        }
    }
    index--
    [arr[pivot], arr[index]] = [arr[index], arr[pivot]]
    return index
}

console.log(find(arr))