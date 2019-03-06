/**
 * @method
 * @param {function} cb
 * @return {array}
 */
NodeList.prototype.filter = function (cb) {

    if (typeof cb === 'function') {
        let res = []
        for (let i = 0; i < this.length; i++) {
            if (cb(this[i])) {
                res.push(this[i])
            }
        }
        return res
    }
    return this
}

const defaultConfig = {
    direction: 'x', // x | y
    delay: 500
}

class Swiper {
    constructor($container, config) {
        // init reference
        this.contianer = $container
        this.config = Object.assign({}, defaultConfig, config)
        this.pages = this.contianer.childNodes.filter(node => {
            return node.nodeType === 1
        })
        // init page index
        this.index = 1
        this.length = this.pages.length

        // intervalID hold
        this.interval = null

        // init styles
        this.contianer.style.cssText += `position: relative; transform: translate3d(0, 0, 0); transition: all ${this.config.delay}ms ease 0s; `
        this.pages.forEach((page, idx) => {
            page.style.cssText +=
                this.config.direction === 'y' ?
                `position: absolute; top: ${idx*100}%; left: 0px;` :
                `position: absolute; top: 0px; left: ${idx*100}%;`
        })
    }

    to(index) {
        // adjust
        if (index > this.length) index = this.length
        if (index < 1) index = 1
        // cancel last slide
        if (this.interval) clearInterval(this.interval)

        // toNext
        if (index > this.index) {
            this.interval = setInterval(() => {
                if (index > this.index) {
                    this.contianer.style.cssText +=
                        this.config.direction === 'y' ?
                        `transform: translate3d(0px, -${this.index*100}%, 0px);` :
                        `transform: translate3d(-${this.index*100}%, 0px, 0px);`
                    this.index++
                } else {
                    clearInterval(this.interval)
                }
            }, this.config.delay)
        }
        // toPrevious
        else if (index < this.index) {
            this.interval = setInterval(() => {
                if (index < this.index) {
                    this.index--
                    this.contianer.style.cssText +=
                        this.config.direction === 'y' ?
                        `transform: translate3d(0px, -${(this.index-1)*100}%, 0px);` :
                        `transform: translate3d(-${(this.index-1)*100}%, 0px, 0px);`
                } else {
                    clearInterval(this.interval)
                }
            }, this.config.delay)
        }
    }

    toNext() {
        this.to(++this.index)
    }

    toPrevious() {
        this.to(--this.index)
    }

    toFirst() {
        this.to(1)
    }

    toLast() {
        this.to(this.length)
    }
}

exports = Swiper