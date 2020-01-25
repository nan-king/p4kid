# 画圆的艺术

## 教学目标
	针对6岁左右的孩子，认识基本的英文单词即可，如果孩子喜欢画画最好（没见过不喜欢画画的孩子^_^）。
	经过本章教学，让孩子掌握基本的函数调用。了解计算机擅长的事情，激发孩子学习编程语言的兴趣。

## 课前准备（家长）
1. 知识预备：熟悉基本的git 命令，孩子爸妈掌握一点html 脚本编程环境， 知道出了错怎么差错（不在孩子面前丢脸^_^）
2. 下载代码：
   git clone https://github.com/nan-king/p4nan.git
3. 家长阅读代码 
   docs/lesson1/nan.html 源代码，每个注释的代码片段可以当着一个小结来教学。
4. 拷贝框架
   新建 test.html
```js
<script src="../lib/nan-init-v1.js"></script>
<script>
// 画圆
//drawCycle(100,100,100)
</script>
```

## 第一小结--画圆
### 课前预备
可以和小朋友比试一下，看谁画的圆最圆。预热一下氛围。
然后介绍圆的原理： 圆上的任何一点到圆心的距离相等。
然后，再说一下位置标定，x,y坐标。
### 小试牛刀

文本编辑器打开原先准备的：  docs/lesson1/test.html
同事浏览器也打开这个文件（此时，浏览器显示白板）。

让小朋友自己删掉  drawCycle 前面的注释，test.html文件内容变成：

```js
<script src="../lib/nan-init-v1.js"></script>
<script>
// 画圆
drawCycle(100,100,100)
</script>

```
刷新浏览器。
最完美的圆登场了，让小朋友对比一下自己画的圆和计算机画的圆吧。



### 再接再厉

多画几个圆看看？ 画两个就行了，其他的请大人代劳（不要让单调重复的工作消磨小朋友的兴趣）

```js
// 直接画同心园:
drawCycle(100,100,100)
drawCycle(100,100,98)
drawCycle(100,100,96)
drawCycle(100,100,94)
drawCycle(100,100,92)
drawCycle(100,100,90)
drawCycle(100,100,88)
drawCycle(100,100,86)
drawCycle(100,100,84)
drawCycle(100,100,82)
drawCycle(100,100,80)
drawCycle(100,100,78)
drawCycle(100,100,76)
drawCycle(100,100,74)
drawCycle(100,100,72)
drawCycle(100,100,70)
drawCycle(100,100,68)
drawCycle(100,100,66)
drawCycle(100,100,64)
drawCycle(100,100,62)
drawCycle(100,100,60)
drawCycle(100,100,58)
drawCycle(100,100,56)
drawCycle(100,100,54)
drawCycle(100,100,52)
drawCycle(100,100,50)

```
刷新一下看看？ 一组神奇的同心圆出现了，有点像一张光盘。


### 极限拓展

手动画同心圆枯燥吧， 不过我们有更好的办法，可以继续下面的尝试。简单循环教学：
展示一下强大的循环处理，让枯燥的重复工作

背景知识补充：
1. 讲解一下变量声明，变量就是一个位置（代号），比如：班长是谁，有可能是子萱，也可能是子涵😄，
2. 讲一下while 这个单词的意思（当…的时候），

```js
// 条件循环画同心圆1:
var r=100;
while(r>60){
   drawCycle(100,100,r)
   r=r-2
}

```
