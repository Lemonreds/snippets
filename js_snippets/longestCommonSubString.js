// 最长公共字串

function find(str1, str2) {

    const s1 = [...str1]
    const s2 = [...str2]

    // 生成二位数组，行列高度都多1
    const matrix = Array(s1.length + 1).fill(null).map(() => {
        return Array(s2.length + 1)
    })

    // 第一列全设置为 0
    for (let i = 0; i < s2.length + 1; i++) {
        matrix[0][i] = 0
    }
    // 第一行全设置为 0
    for (let j = 0; j < s1.length + 1; j++) {
        matrix[j][0] = 0
    }

    // 设置最长公共字串的长度 行列坐标
    let longestLength = 0
    let logesetRow = 0
    let logesetCol = 0

    // 遍历字符串 填满数组
    for (let i = 1; i < s1.length + 1; i++) {
        for (let j = 1; j < s2.length + 1; j++) {
            if (s1[i] === s2[j]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1
            } else {
                matrix[i][j] = 0
            }
            // 是否是最长的 是则记录
            if (matrix[i][j] > longestLength) {
                longestLength = matrix[i][j]
                logesetRow = i
                logesetCol = j
            }
        }
    }

    let res = ''
    // 读取结果
    while (matrix[logesetRow][logesetCol] > 0) {
        res = s1[logesetRow] + res
        logesetRow--
        logesetCol--
    }
    return res
}

console.log(find('ABCDEFG', 'DEF'))
console.log(find('POEEUGOEAGNEA', 'GOEEII'))