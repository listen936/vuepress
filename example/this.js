Function.prototype.myApply = function (context) {
    context = context || window
    const fn = Symbol()
    context[fn] = this
    const args = arguments[1]
    const result = args ? context[fn](...args) : context[fn]()
    delete context[fn]
    return result
}

Function.prototype.myCall = function (context) {
    context = context || window;
    const fn = Symbol();
    context[fn] = this;

    const args = [...arguments].slice(1)
    const result = context[fn](...args)
    delete context[fn]
    return result
}

// Function.prototype.myBind = function(context) {
//     context = context || window
//     const self = this
//     const _args = [...arguments].slice(1)

//     return function() {
//         return self.apply(context,[..._args,...arguments])
//     }
// }
Function.prototype.myBind = function (context) {
    context = context || window
    const self = this
    const _args = [...arguments].slice(1)

    function fNOP() {}

    function fBound() {
        const args = arguments;
        return self.apply(this instanceof fNOP ? this : context, [..._args, ...args])
    }
    fNOP.prototype = self.prototype
    return fBound
}

function f(y, z) {
    return this.x + y + z;
}
var m = f.myBind({
    x: 1
}, 2);
console.log(m(3));
for (var i = 1; i <= 5; i++) {
    // 缓存参数
    setTimeout(function (i) {
        console.log('bind', i) // 依次输出：1 2 3 4 5
    }.bind(null, i), 1000);
}