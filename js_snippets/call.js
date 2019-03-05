Function.prototype._call = function (context, ...params) {

    if (!context) context = window

    Object.defineProperty(context, '__func', {
        configurable: true,
        enumerable: false,
        writable: false,
        value: this
    })
    let result = context['__func'](...params)

    delete context['__func']
    return result
}

const ctx = {
    x: 6,
    y: {
        x: 1,
        func: function (a, b) {
            console.log(this.x)
            console.log(a)
            console.log(b)
        }
    }
}

ctx.y.func._call(ctx, 654, 666)