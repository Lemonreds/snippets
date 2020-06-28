function randomStr(len) {

    let random = 'abcdefghijkmnopqrstuvwxyz9876543210'
    let length = random.length
    let str = ''

    for (let i = 0; i < len; i++) {
        str += random.charAt((Math.random() * length))
    }
    return str
}

console.log(randomStr(7))