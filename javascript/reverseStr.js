function reverse(str) {
    return [...str].reduceRight((prev, curr) => (prev + curr), '')
}

console.log(reverse('123456789abcdefghijklmmopqrstuvwxzy'))