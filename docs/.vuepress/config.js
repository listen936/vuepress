/*
 * @Author: your name
 * @Date: 2020-07-16 10:59:35
 * @LastEditTime: 2020-07-16 14:41:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress\docs\.vuepress\config.js
 */
module.exports = {
  title: "记录生活、记录成长",
  description: "记录生活、记录成长",
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  host: '0.0.0.0',
  port: 8080,
  dest: './dist', //vuepress build 的输出目录
  // 指定额外的需要被监听的文件。
  // 你可以监听任何想监听的文件，文件变动将会触发 vuepress 重新构建，并实时更新
  extraWatchFiles: [],
  // theme:'@vuepress/theme-blog'
  themeConfig: {
    logo: '/logo.png',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Article',
        link: '/article/'
      },
      {
        text: 'Github',
        link: 'https://github.com/listen936'
      },
    ],
    // sidebar:'auto',
    sidebar: [{
        title: '浏览器知识', // 必要的
        //   path: '/article/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          ['/article/browser/render', '浏览器的渲染过程'],
          ['/article/browser/跨标签通信', '跨标签通信'],
        ]
      },
      {
        title: '算法', // 必要的
        //   path: '/article/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          ['/article/algorithm/words', '算法基础知识']
        ]
      },
      {
        title: '其他', // 必要的
        //   path: '/article/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          ['/article/other/markdown', 'markdown的常用语法']
        ]
      },
      {
        title: 'Vue', // 必要的
        // path: '/article/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          ['/article/vue/xiushifu', 'vue的修饰符']
        ]
      },
      {
        title: 'JS', // 必要的
        // path: '/article/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          ['/article/js/es6ArrayMethods', 'ES6+中数组的方法'],
          ['/article/js/debounce&throttle', '防抖和节流']
        ]
      },
    ],

    lastUpdated: 'Last Updated',
  }
}