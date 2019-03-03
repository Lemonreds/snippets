function removeDuplicate(array) {

    if (!Array.isArray(array)) return array

    return array.filter((val, index) => (array.indexOf(val) === index))
}


const arr1 = [0, 13, 6, 6, 98, 0, 3, 6, 13, 66, 78, 2]
const arr2 = [0, 0, 0, 0, 0, 0, 1, 2, 3, 46, 5, 4, 3]

console.log(removeDuplicate(arr1))
console.log(removeDuplicate(arr2))