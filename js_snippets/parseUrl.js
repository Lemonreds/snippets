const URL = "https://cn.bing.com/search?q=%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F&qs=n&form=QBRE&sp=-1&pq=zheng%27ze%27biao&sc=0-13&sk=&cvid=EB3040CCD240495BB2673ABC52F623D2"
console.log(parseURL(URL))

function parseURL(url) {

    // 匹配？后的字符串
    const regx = /\?.+$/g
    const query = url.match(regx)[0].replace('?', '')
    const params = query.split('&')

    const result = {}

    params.forEach(item => {
        let keyValue = item.split('=')
        let key = keyValue[0]
        let value = decodeURIComponent(keyValue[1])

        if (!result.hasOwnProperty(key)) {
            result[key] = value
        }
    })

    return result
}
// { q: '正则表达式',
//   qs: 'n',
//   form: 'QBRE',
//   sp: '-1',
//   pq: 'zheng\'ze\'biao',
//   sc: '0-13',
//   sk: '',
//   cvid: 'EB3040CCD240495BB2673ABC52F623D2' }