// Hook是16.7后新增的功能, 主要是用来让无状态组件 可以使用状态  在react开发中状态管理是必不可少的,
// 以前为了进行状态管理  需要使用类组件或者redux来管理

// function 可以使用react hook 中的useState来进行实现
// useState是来定义一个状态的   它与类数组的状态不同, 函数组件的状态可以是对象也可以是基础数据类型
// userState返回的是一个数组, 第一个是当前的状态值, 第二个是对象表明用于更改状态的函数(类似于setState)
