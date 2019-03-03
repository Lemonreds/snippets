const strs = [
    'race car',
    'not a palindrome',
    'A man, a plan, a canal. Panama',
    'My age is 0, 0 si ega ym.',
    '0 _0(: /-\ :) 0-0'
]

function palindrome(str) {

    // 过滤所有非单词字符
    let filterStr = str.replace(/\W+/g, '')
    let finalStr = filterStr.toLowerCase()
    let reverseStr = finalStr.split().reverse().join('')

    return reverseStr === finalStr
}


strs.forEach(val => {
    console.log(palindrome(val))
})