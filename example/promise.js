const PENDING = "pending"
const FULFIIED = 'fulfilled'
const REJECTED = "rejected"

function Promise(executor) {
    let self = this
    self.status = PENDING
    self.onFulfilled = []
    self.onRejected = []

    function resolve(value) {
        if (self.status === PENDING) {
            self.status = FULFIIED
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
        if (self.status === FULFIIED) {
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