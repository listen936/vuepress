# bind、 call、 apply、 new

## apply

```js
Function.prototype.myApply = function (context) { 
    context = context || window
    const fn  =  Symbol()
    context[fn] = this
    const args = arguments[1]
    const result = args ? context[fn](...args) : context[fn]()
    delete context[fn]
    return result
 }

```

## call

```js
Function.prototype.myCall = function (context) {
    context = context || window;
    const fn = Symbol();
    context[fn] = this;

    const args = [...arguments].slice(1)
    const result = context[fn](...args)
    delete context[fn]
    return result
}

```

## bind 

bind返回的是一个函数

```js
Function.prototype.myBind = function(context) {
    context = context || window
    const self = this
    const _args = [...arguments].slice(1)

    function fNOP() {}
    function fBound() {
        const args = arguments;
        return self.apply(this instanceof fNOP ? this : context,[..._args,...args])
    }
    fNOP.prototype = self.prototype
    return fBound
}
```

## new 

new命令的作用是执行构造函数，返回一个实例对象，这个命令执行过程具体是什么样的呢？

1. 创建一个新对象，作为要返回的对象实例
2. 将这个空对象的原型，指向构造函数的prototype属性
3. 将这个空对象复制给函数内部的this关键字
4. 开始执行构造函数内部的代码

```js
    function _new(fn,...args) {
        const obj  =  Object.create(fn.prototype)
        const res = fn.apply(obj,args)
        return res instanceof Object ? res : obj
    }
```