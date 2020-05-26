# markdown的常用语法

### 1、标题

语法： # 标题
```js
#       一级标题（h1)
##      二级标题（h2)
###     三级标题（h3)
####    四级标题（h4)
#####   五级标题（h5)
######  六级标题（h6)
```
### 2、列表

#### 无序列表

语法：无序列表使用*、+或是-作为列表标记

``` markdown
*   Red
*   Green
*   Blue
```

等同于

```markdown
+   Red
+   Green
+   Blue
```

也等同于

```markdown
-   Red
-   Green
-   Blue
```

效果：

* Red
* Green
* Blue

#### 有序列表

语法：有序列表则使用数字接着一个英文句点

```markdown
1.  Bird
2.  McHale
3.  Parish
```

效果：

1. Bird
2. McHale
3. Parish

列表标记上使用的数字并不会影响输出的 HTML 结果

### 3、超链接

```markdown
语法：[文本说明](url)
自动链接 <url>
```

效果：[这个是个超链接](https://github.com/listen936)
自动链接 <https://github.com/listen936>

### 4、图片

```markdown
语法：![图片名](url)
```

效果：![头像](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABmCAMAAAAOARRQAAAA4VBMVEUbFRUaFxcwMDAaFRX///8iHh79/f0dGBhUUFDT0tK4t7cwKyuysbHNy8syLS34+PhoZWUrJiYfGhrw8PDu7e3Z2Nivrq6npaVxbm5jYGDe3d3DwsKamJh7eHhtampXU1NCPj76+vr39vbg39/b29vR0NDBv7+Cf39aVlZNSUklICDy8vLq6enk5OTi4eHa2dnHxsa1s7NfW1s0Ly/o6OjV1NS8u7utq6ukoqKem5uSj491cnJdWVlXVFRRTU1IREQ+OTk4NDQuKionIiL09PS2tLSVkpKPjY2Kh4eHhISpp6evBPJsAAAAA3RSTlPmhwVTsZLPAAADoklEQVRo3u3aaVMaMRzHcWx+e7EHN+U+CoigghTv+6hV+/5fUOsITeIsm38WatuZ/T5TGT4SkrAEUp+2UuwPl9r6lNpiH9BWKsU+IJqyfgmTMCyshEmYv8t0WuczZ1LMZIoT5/G80mFs48y4Ut7Du4pe5WGjzE75C0LLeJcbY7IOIiq1rE0w7SkU1S7XZlwPhNLz9ZhqAaS+Zddg8g2QOzXiMuM6NPJz8RjXgVb9eRzGrUGz/bk+M3agXT+ny+TriJFvaDINxOqzHlPl/+Cw4ZuIyBw0hgdY1tJhXL4qv77++HKIFe09B4wxm6/TOw3G41vw22gbQw5nMli2+/L2Z2sXy47pTBu/G7BF9ydmzxtedQLjFxp02sNyzZwFbBEfNVTJzFTYFPlv5Vkk/+IEv5tYRCYLXpmROgWvQmQcaYaSOgOvZpGYHQjVaUwaQlUSU4bQIY3pQ+iYwozlq4tbihJArHtPYCoQ244xaGgSGHnMcjTmoSeNGoGRrvouGLEshHYtJdOBUM9i1I4gNFIyLQg9M3JN6clRMucQuqEztxA6UzIz8ApMo8PV8zMVvdOUdBgfvJ6SmSh2GtLSKSqZInhpHeYEvK6SychDTO8RQnkVI+5ovg6zDSFLxeyDt6/DTKUpqmIG4Jl5MiIPQ03FyI/dpis3EPKVzAmEvtOZZwillUwDQg6dOYDQqZLJQuyOqrhd6fVDybgQ86jMZ/mVXcmwGsRGNKVjShfWTM2cQmxgUBTjQB4DAtOC1DZh7VhpaF9y5L5AKj1WPpYypMyAwLDPkNu/ilbsHuRmTMnw9Vw49peT9NGOQDwT77JJDPOXF/b3Z1hUerLzIaPVPi+FHElpvfEovL4drPKXn8yRJ83uUXraRVgXRMYq8R0tC55vSbeqI7SeQWTY9WK4X+QJcROxJHmXjMbw+zZtxoz+yn10gJA8RmdyRf5sBst7a7B3PYUou64Gw1rCqYDRPDJhlr7Pw28k14x1mHKwmLm5sC1nh3yYory6izpcvMb76pYuYzhvhyPXGkz/Icax3dul1Jfh6n0Gcnt3cQ4hA2dxNfQ0mueN251AwUzvYh6ppiH2NZqpP8Q9ILbOIpm2NMesNY67K8WIw4srYVU21zu8z/3gzOp147lrfxRhLze17Cpmov4oglC+4kQN2tGFwZQMrVG5i4IbssGaM5tt8kMvt30f8sS1X9fSf/pJYcIkTMIkTMJsivlXvqCW+qAv9X3QVxR/AveXsgHzlAQ9AAAAAElFTkSuQmCC)

### 5、引用

语法： > 文本
效果：
> 书籍是人类进步的阶梯

### 6、斜体、加粗

```markdown
语法：
*斜体*
**加粗**
***斜体加粗***
```

效果：
*斜体*
**加粗**
***斜体加粗***

### 7、代码块

语法：
\```语言
    代码内容
\```
效果：

```javascript
 console.log(1)
```

### 8、表格

语法：
```
dog | bird | cat
----|------|----
foo | foo  | foo
bar | bar  | bar
baz | baz  | baz
```

效果：
dog | bird | cat
----|------|----
foo | foo  | foo
bar | bar  | bar
baz | baz  | baz

### 9、分割线

语法： ---（最少3个）
效果：

----

