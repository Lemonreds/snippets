// 割绳子问题
function maxProduct(len) {

    if (len <= 1) return 0
    if (len === 2) return 1
    if (len === 3) return 2

    let max_products = []
    let max_value = 0

    max_products.push(0)
    max_products.push(1)
    max_products.push(2)
    max_products.push(3)

    for (let i = 4; i <= len; i++) {
        max_value = 0
        for (let j = 1; j <= i / 2; j++) {
            let product = max_products[j] * max_products[i - j]
            if (max_value < product) {
                max_value = product
            }
            max_products[i] = max_value
        }
    }
    return max_products[len]
}

console.log(maxProduct(5))
console.log(maxProduct(7))