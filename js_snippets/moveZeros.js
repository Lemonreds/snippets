const arr = [0, 0, 1, 2, 0, 4, 5, 0, 0, 0, 0, 23, 4]

function move(arr) {

    let index = 0

    for (let i = index; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[index++] = arr[i]
        }
    }

    while (index < arr.length) {
        arr[index++] = 0
    }
    return arr
}
console.log(move(arr))