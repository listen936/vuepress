# JS 执行上下文

## js代码的执行

JavaScript是属于解释型语言，执行分为：解释和执行，这两个阶段所做的事并不一样：

### 解释阶段：

1. 词法分析
2. 语法分析
3. 作用域规则确定

### 执行阶段

1. 创建执行上下文
2. 执行函数代码
3. 垃圾回收

由上可知，JavaScript在解释阶段就确定了作用域规则，所以作用域在函数定义的时候就确定了，而不是在函数执行时，但执行上下文是在执行阶段创建的，最明显的就是this的指向是在执行时确定的。

作用域和执行上下文之间最大的区别是：执行上下文在运行时确定，随时可以改变，作用域在定义的时候就确定了，并且不会改变。

一个作用域下可能有若干个执行上下文，也有可能没有执行上下文（函数没有执行过）；有可能有过，但当函数执行完成后就销毁了；有可能同时存在一个或多个（闭包）。同一个作用域下，不同的调用会产生不同的执行上下文环境，从而产生不同的变量的值。

## 执行上下文

javaScript可执行的代码类型有3种：全局代码、函数代码、eval代码。而执行上下文就是代码的运行时环境，分以下3种：

+ 全局执行上下文：只有一个，浏览器中的全局对象就是window对象，this指向这个全局对象，node中是global
+ 函数执行上下文： 存在无数个，只有在函数执行的时候才会被创建，每次函数执行都会创建一个新的执行上下文
+ Eval函数执行上下文：指运行在eval函数中的代码，很少用而且不建议使用

## 执行上下文栈

JS引擎创建了很多的执行上下文，所以js引擎创建了执行上下文栈来管理执行上下文。

用个数组来模拟执行上下文栈：
```JS
    ECSstack = []
```
JavaScript开始要解释执行代码的时候，最先遇到的就是全局代码，所以初始化的时候首先会想执行上下栈压入一个全局执行上下文(globalContext),并且只有当整个应用程序结束的时候，ECSstack才会被清空。

假如遇到下面的代码：
```JS
    function fun3() {
        console.log('fun3')
    }
    function fun2() {
        fun3()
    }
    function fun1() {
        fun2()
    }
    fun1();
```
当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，函数执行的时候就是进入这个执行上下文，当函数执行完成的时候，就会将函数的执行上下文从栈中弹出。

```js
//伪代码
// 程序开始执行
ECSstack.push(`window`,globalContext)

// 执行fun1()
ESCstack.push(`<fun1>`,ExecutionContext)

// fun1中调用了fun2， 创建一下fun2的执行上下文
ESCstack.push(`<fun2>`,ExecutionContext)

// fun2中又调用的fun3，再创建一个fun3的执行上下文
ECSstack.push(`<fun3>`,ExecutionContext)

// fun3执行完成
ECSstack.pop()

// fun2执行完成
ECSstack.pop()

// fun1执行完成
ECSstack.pop()

// javascript执行下面的程序，但ECSstack栈底还有个globalContext
```

## 建立执行上下文

执行上下文的建立阶段完成了**词法变量**、**变量环境**的创建和this的绑定

### this binding
在全局执行上下文中，this的值指向全局对象，在浏览器中，this的值指向window

在函数执行上下文中，this的值取决于函数的调用方式。如果是被一个对象调用，那么this则指向这个对象，否则this的值会被设置为全局对象或者undefined（严格模式）

### 词法环境（Lexical Environment）

词法环境是一个包含标识符变量映射的结构。（标识符表示变量/函数的名称，变量是对实际对象【包含函数类型对象】或原始值的引用

在词法环境中有两个组成部分：

1. 环境记录(Environment record), 环境记录是存储变量和函数声明的实际位置（可以理解为变量对象）
2. 对外部环境的引用, 对外部环境的引用意味着它可以访问其外部词法环境（可以理解为作用域链中的链）

对于函数而言，环境记录还包含了一个arguments对象，该对象包含了索引和传递给函数的参数之间的映射及参数长度

环境记录同样有两种类型：
1. 声明性环境记录，存储变量、函数和参数。 一个函数环境包含声明性环境记录。
2. 对象环境记录 用于定义在全局执行上下文中出现的变量和函数的关联

### 变量环境 （Variable Environment）
和词法环境定义基本类似，区别在于

>在ES6中，词法环境组件用于存储函数声明和变量（let const）绑定，而变量环境仅用于存储变量（var）绑定

```js
    let a = 1;
    const b = 2;
    var c;

    function multiply(e,f) {
        var g = 4;
        return e * f * g;
    }
    c = multiply(a,b)
```
执行上下文如下：
```js
    GlobalExecutionContext = {
        ThisBinding: <Global Object>,
        LexicalEnvironment:{
            EnvironmentRecord: {
                Type:'Object',
                // 标识符绑定在这里
                a:< uninitialized>,
                b:< uninitialized>,
                multiply: <func>
            },
            outer:<null>
        },
        VariableEnvironment:{
            EnvironmentRecord: {
                Type:"Object",
                c:undefined,
            },
            outer: <null>
        }

    }

    functionExecutionContext: {
        ThisBinding: <Global Object>,
        LexicalEnvironment: {
            EnvironmentRecord: {
                Type:"Declarative",
                Arguments: {0:20,1:30,length:2},
            },
            outer: <GlobalLexicalEnvironment>
        },
        VariableEnvironment:{
            EnvironmentRecord: {
                Type:"Declarative",
                g:undefined,
            },
            outer: <GlobalLexicalEnvironment>
        }
    }

```
## 执行上下文的重要属性

+ 变量对象（Variable object - VO） 
+ 作用域链（Scope chain）
+ this

### 变量对象（VO）

变量对象是与执行上下文相关的数据作用域，存储了在上下文定义的变量和函数声明。

不同执行上下文下的变量对象稍有不同，全局上下文的变量对象就是全局对象，this在undefined情况下就会指向全局对象，也就是浏览器对象。

### 活动对象 （AO)

在函数上下文中，我们用活动对象（activation object- AO）来表示变量对象。

活动对象和变量对象其实是一个东西，只是变量对象是规范上的或者说是引擎实现上的，不可在JavaScript环境中访问，只有当进入一个执行上下文中，这个执行上下文的变量对象才会被激活，只有被激活的变量对象，也就是活动对象上的各种属性才能被访问。

### 代码执行过程

执行上下文大代码会分成两个阶段进行处理：分析和执行。

1. 进入执行上下文，用arguments创建活动对象
2. 代码执行

#### 进入执行上下文

当进入执行上下文的时候，还没执行代码，

变量对象会包含：

1. 函数所有的形参（如果是函数上下文）

    + 由名称和对应值组成的一个变量对象的属性被创建
    + 没有实参，属性值设为undefined

2. 函数声明

    + 由名称和对应值(function-object)组成的一个变量对象的属性被创建
    + 如果变量对象已经存在相同名称的属性，则完全替换这个属性（变量声明无法覆盖函数声明）

3. 变量声明
    
    + 由名称和对应值（undefined）组成的一个变量对象的属性被创建
    + 如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性

代码解释
```js
    function foo(a){
        var b = 2;
        function c() {}
        var d = function() {}
        b = 3
    }

    foo(1)
```
在进入执行上下文后，这时候的AO是：
```js
    AO = {
        arguments: {
            0:1,
            length:1
        },
        a:1,
        b:undefined,
        c:reference to function c() {}
        d:undefined
    }
```
代码执行
代码会顺序执行，当执行完后，这时的AO是

```js
AO = {
    arguments: {
        0:1,
        length:1
    },
    a: 1,
    b: 3,
    c: reference to function c() {}
    d: reference to FunctionExpression 'd'
}

```

总结一下：

+ 全局上下文的变量对象初始化是全局对象
+ 函数上下文的变量对象初始化只包括Arguments对象
+ 在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性
+ 在代码执行阶段，会再次修改变量对象的属性值，此时可访问对象即活动对象

## 作用域链

当查找变量时，会从当前的上下文的变量对象中查找，如果没有，就会从父级执行上下文的变量对象中查找，一直找到全局上下文的变量对象。这样有多个执行上下文的变量对象构成的链表就叫做作用域链

代码解释：

```js
    function foo() {
        function bar() {
            ...
        }
    }

```
函数创建时，各自的[[scope]]为：
```js
    foo.[[scope]] = [ globalContext.VO]

    bar.[[scope]] = [ fooContext.VO, globalContext.VO]
```

再来一个栗子
```js
    var scope = "global scope"
    function checkscope() {
        var scope2 = "local scope";
        return scope2
    }
    checkscope()
```
对于上面的代码来说，执行过程如下：

1. checkscope 函数被创建，保存作用域到内部属性[[scope]]
```js
    checkscope.[[scope]] = [
        globalContext.VO
    ]
```

2. 执行checkscope函数，创建执行上下文，checkscope函数执行上下文被压入执行上下文栈
```js
    ECSstack = [
        checkscope,
        globalContext
    ]
```
3. checkscope 函数并不立即执行，开始准备工作， 第一步： 复制函数[[scope]]属性创建作用域链
```js
    checkscopeContext = {
        Scope:checkscope.[[scope]],
    }

```
4. 第二步： 用arguments创建活动对象，随后初始化活动对象，加入形参、函数声明、变量声明

```js
    checkscopeContext = {
        AO: {
            arguments: {
            length: 0
            },
            scope2: undefined
        },
        Scope:checkscope.[[scope]],
    }

```
5. 第三步： 将活动对象压入checkscope作用域链顶端
```js
    checkscopeContext = {
        AO: {
            arguments: {
            length: 0
            },
            scope2: undefined
        },
        Scope:[AO,[[scope]],
    }

```
6. 准备工作做完，开始执行函数，修改AO的属性
```js
    checkscopeContext = {
        AO: {
            arguments: {
            length: 0
            },
            scope2: "local scope"
        },
        Scope:[AO,[[scope]],
    }
```
7. 函数执行完毕，函数执行上下文从上下文栈中弹出
```js
ECStack = [
  globalContext
];
```