# Promise 

## Promise A+ 规范

```js
const PENDING = "pending"
const FULFILLED = 'fulfilled'
const REJECTED = "rejected"

function Promise(executor) {
    let self = this
    self.status = PENDING
    self.onFulfilled = []
    self.onRejected = []

    function resolve(value) {
        if (self.status === PENDING) {
            self.status = FULFILLED
            self.value = value
            self.onFulfilled.forEach(fn => fn())
        }
    }

    function reject(reason) {
        if (self.status === PENDING) {
            self.status = REJECTED
            self.reason = reason
            self.onRejected.forEach(fn => fn())
        }
    }
    try {
        executor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
        throw reason
    };
    let self = this
    let promise2 = new Promise((resolve, reject) => {
        if (self.status === FULFILLED) {
            setTimeout(() => {
                try {
                    let x = onFulfilled(self.value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
        } else if (self.status === REJECTED) {
            setTimeout(() => {
                try {
                    let x = onRejected(self.reason)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
        } else if (self.status === PENDING) {
            self.onFulfilled.push(value => {
                
                try {
                    let x = onFulfilled(self.value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }

            })
            self.onRejected.push(reason => {

                try {
                    let x = onRejected(self.reason)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }

            })
        }
    })

    return promise2
}

function resolePromise(promise2, x, resolve, reject) {
    if (x === promise2) {
        reject(new TypeError('Chaining cycle'))
    }
    let self = this
    if (x && typeof x === 'object' || typeof x === 'function') {
        let used;
        try {
            let then = x.then
            if (typeof then === 'function') {
                then.call(x, (y) => {
                    if (used) return;
                    used = true;
                    resolePromise(promise2, x, resolve, reject)
                }, (z) => {
                    if (used) return;
                    used = true;
                    reject(z)
                })
            } else {
                if (used) return;
                used = true
                resolve(x)
            }
        } catch (e) {
            if (used) return;
            used = true
            reject(e)
        }
    } else {
        resolve(x)
    }
}

```

```js
Promise.resolve = (param) => {
    return new Promise((resolve, reject) => {
        if (param && typeof param === 'object' || typeof param === 'function') {
            param.then(resolve, reject)
        } else {
            resolve(param)
        }
    })
}
```

```js
Promise.reject = (param) => {
    return new Promise((resolve, reject) => {
        reject(param)
    })
}
```

```js
Promise.all = (array) => {
    array = Array.from(array)
    return new Promise((resolve, reject) => {
        let result = [],
            index = 0;
        if (array.length === 0) {
            resolve(result)
        } else {
            for (let i = 0; i < array.length; i++) {
                let current = array[i]
                Promise.resolve(current).then(data => {
                    processData(i, data)
                }, err => {
                    reject(err)
                    return;
                })
            }

            function processData(n, data) {
                result[n] = data
                if (++index === array.length) {
                    resolve(result)
                }
            }
        }

    })
}
```

```js
Promise.race = (array) => {
    array = Array.from(array)
    return new Promise((resolve, reject) => {
        if (array.length === 0) {
            return
        } else {
            for (let i = 0; i < array.length; i++) {
                Promise.resolve(array[i]).then(data => {
                    resolve(data)
                    return
                }, err => {
                    reject(err)
                    return
                })
            }
        }
    })
}
```

```js
Promise.prototype.finally = (callback) => {
    return this.then(data => {
        return Promise.resolve(callback).then(() => {
            return data
        })
    }, err => {
        return Promise.resolve(callback).then(() => {
            throw err
        })
    })

}
```

```js
Promise.prototype.catch = (onRejected) => {
    return this.then(null, onRejected)
}
```