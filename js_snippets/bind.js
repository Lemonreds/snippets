Function.prototype._bind = function (context) {

    if (typeof this !== 'function') throw new Error('Please use a function binding.')

    let args = [...arguments].slice(1)

    return (...params) => (this.apply(context || window, args.concat(params)))
}

const ctx = {
    x: 5,
    y: {
        x: 6,
        func: function (param) {
            console.log(this.x)
            console.log(param)
        }
    }
}


let bind = ctx.y.func._bind(ctx)

bind(666)