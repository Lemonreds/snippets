const arr = [3, 4, 4, 2, 1, 0, 3, 2, 0, 9, 1] // 9

function find(arr) {
    return arr.reduce((prev, curr) => (prev ^ curr), 0)
}

console.log(find(arr))