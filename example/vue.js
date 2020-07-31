function cb() {
    console.log('视图更新了');
}

function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            return val
        },
        set: function reactiveSetter(newVal) {
            if (val === newVal) return;
            cb(newVal)
        }
    })
}

function observer(value) {
    if (!value || (typeof value !== "object")) return
    Object.keys(value).forEach((key) => {
        defineReactive(value, key, value[key])
    })
}

// class Vue {
//     constructor(options) {
//         this._data = options.data
//         observer(this._data)
//     }
// }
// let vm = new Vue({
//     data: {
//         test: 'test t'
//     }
// })
// vm._data.test = '111'

class Dep {
    constructor() {
        this.subs = []
    }
    addSub(sub) {
        this.subs.push(sub)
    }
    notify() {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}

class Watcher {
    constructor() {
        Dep.target = this
    }
    update() {
        console.log('更新视图了');

    }
}

Dep.target = null