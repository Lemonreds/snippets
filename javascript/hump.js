// input: background-size-position
// output: backgroundSizePosition
function hump1(str) {
    return str.split('-').reduce((prev, current, idx) => {
        if (idx === 0) return ''
        return prev + current.charAt(0).toUpperCase() + current.substring(1)
    })
}
console.log(hump1('background-size-position'))


function hump(str) {
    return str.split('').reduce((prev, current) => {
        if ((/[A-Z]/g).test(current)) {
            return prev + '-' + current.toLowerCase()
        }
        return prev + current
    }, '')
}
console.log(hump('backgroundSizePosition'))