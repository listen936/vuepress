# ES6的数组方法

* map、 forEach、 some、 every、 filter、 reduce、find、flat

## map

* map方法会创建一个新数组，其返回值为一个由原数组每个元素执行回调函数的结果组成的新数组
* 不会改变原数组

```js
    let arr = [1,2,3]
    // val为当前值；index为下标；arr为原数组（被遍历的数组）
    let newArr = arr.map((val,index,arr) => val*10)
    console.log(newArr) // [10,20,30]
    console.log(arr) // [1,2,3]
```

## forEach

* 循环遍历每一个数组元素
* 无法中断循环，return也不行
* 没有返回值

```js
    let arr = [1,2,3]
    // val为当前值；index为下标；arr为原数组（被遍历的数组）
    arr.forEach((val,index,arr) => arr[index] = val*10)
    console.log(arr) // [10,20,30]
```

## some

* 只要有一个符合回调函数的要求就会返回true，否则都是false
* 遇到符合要求的就会跳出循环

```js
    let arr = [1,2,3]
    // val为当前值；index为下标；arr为原数组（被遍历的数组）
     let bool = arr.some((val,index,arr) => val > 2)
    console.log(bool) // true
```

## every 

* 每一个都必须符合回调函数的要求才会返回true，否则是false
* 遇到一个不符合的就会跳出循环

```js
    let arr = [1,2,3]
    // val为当前值；index为下标；arr为原数组（被遍历的数组）
     let bool = arr.every((val,index,arr) => val > 0)
    console.log(bool) // true
```

## filter 

* 返回一个符合调函数要求的数组
* 如果一个都不符合则返回一个空数组

```js
    let arr = [1,2,3]
    // val为当前值；index为下标；arr为原数组（被遍历的数组）
     let newArr = arr.filter((val,index,arr) => val > 2)
    console.log(newArr) // [3]
```

## reduce

* 对原数组进行一个累计处理
* 返回值为一个最终的累加值
* 可以设置初始值，不设的话默认为数组的第一个元素
* `reduceRight` 用法一致，只是从右往左遍历

```js
    let arr = [1,2,3]
    //sum为上一次回调值； val为当前值；index为下标；arr为原数组（被遍历的数组）
     let sum = arr.reduce((sum,val,index,arr) => sum += val*10, 10)
    console.log(sum) // 70

    // 可用于分离数组
    let newArr = arr.reduce((na,val,index,arr) =>{
        if(val > 2)na.push(val)
        return na
    }, []))
    console.log(newArr) //[3]
```

## find

* 查找数组是否有符合回调函数条件的第一个元素的值
* `findIndex` 返回符合条件的第一个元素的索引

```js
    let arr = [1,2,3]
    // val为当前值；index为下标；arr为原数组（被遍历的数组）
     let num = arr.find((val,index,arr) => val > 2)
    console.log(num) // 3
    let numIndex = arr.findIndex((val,index,arr) => val > 2)
    console.log(numIndex) // 2
```

## flat

* 按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回

```js
    var arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 可以移空元素
var arr5 = [1, 2, , 4, 5];
arr5.flat();
// [1, 2, 4, 5]
```