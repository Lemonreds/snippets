// RGB排序
// 一个字符串，里面只有三种字符R G B，所有的R都在G的前面，所有的G都在B的前面。将给定字符串按照此规律排序。
// 要求不允许用辅助空间，复杂度控制在O(N)。


// 因为交换的是String类型 需要转码
function swap(arr, i, j) {

    // 获取字符的ASC码
    arr[i] = arr[i].charCodeAt(0)
    arr[j] = arr[j].charCodeAt(0)

    // 不使用辅助空间交换数据
    arr[i] = arr[i] ^ arr[j]
    arr[j] = arr[j] ^ arr[i]
    arr[i] = arr[i] ^ arr[j]

    // ASC码转换为字符
    arr[i] = String.fromCharCode(arr[i])
    arr[j] = String.fromCharCode(arr[j])
    return arr
}

/**
 * 入口
 */
function rgb(arr) {

    if (typeof arr === 'string') {
        arr = [...arr]
    }

    let i = 0,
        j = arr.length - 1

    while (i < j) {

        if (arr[i] === 'R') i++
        else if (arr[j] === 'B') j--
        else if (arr[i] === 'B') {
            swap(arr, i, j)
            j--
        } else if (arr[j] === 'R') {
            swap(arr, i, j)
            i++
        } else if (arr[i] === 'G' && arr[j] === 'G') {
            [i, j] = sort2G(arr, i, j)
            if (i === -1 && j === -1) return arr
        }
    }
    return arr
}

/**
 * 如果i,j位置上都是 'G'
 */
function sort2G(arr, i, j) {

    let start = i + 1,
        end = j - 1

    while (start <= end) {
        if (arr[start] === 'R') {
            swap(arr, i, start)
            return [++i, j]
        } else if (arr[end] === 'B') {
            swap(arr, j, end)
            return [i, --j]
        } else if (arr[start] === 'B') {
            swap(arr, start, j)
            return [i, --j]
        } else if (arr[end] === 'R') {
            swap(arr, i, end)
            return [--i, j]
        } else {
            ++start
            --end
        }
    }
    // 排序完成,返回[-1,-1]
    if (start > end) return [-1, -1]
}


const str = 'RGBBGRRBRGRBBGGRRBBG'
console.log(rgb(str))