# 节流和防抖

* 节流和防抖算是比较常用的工具函数了，主要是用到了`闭包`的原理

##  防抖

* 防抖是指动作发生一段时间后触发事件，如果在该段时间内又发生该动作，则需要重新等待一段时间再触发该事件
* 常用的场景：
   + 输入框输入停止一段时间后触发验证
   + 搜索输入联想
   + 自动保存

```js
    // 简易版
    function debounce(fn,time) {
        let timer = null;
        return function(){
            timer && clearTimeout(timer)
            timer = setTimeout(()=> {
                fn.apply(this,arguments)
            },time)
        }
    }
    // 可选立即执行版
    function debounce2(fn,time,immediate) {
        let timer = null
        return funtion(){
           timer && clearTimeout(timer)
           if(immediate && !timer) {
               fn.apply(this,arguments)
           }
           timer = setTimeout(()=> {
               timer = null
              fn.apply(this,arguments)
           },time)
        }
    }
```

## 节流

* 节流是指动作发生一段时间内触发事件，但在这段时间内再次发生该动作，则无视该动作，直到事件完成，再开始
* 常用的场景：
    + scroll事件
    + 防止按钮的疯狂点击

```js
    // 方式1
    function throtte(fn,time) {
        let start = 0;
        return function(){
            let now = Date.now()
            if(now - start > time) {
                fn.apply(this,arguments)
                start = Date.now()
            }
        }
    }
    // 方式2
    function throtte2(fn,time) {
        let disable = false;
        return function() {
            if(!disable) {
                fn.apply(this,arguments)
                disable = true
                setTimeout(()=> disable = false,time)
            }
        }
    }
```