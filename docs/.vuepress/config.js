module.exports = {
    title: "记录生活、记录成长",
    description: "记录生活、记录成长",
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
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
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Article', link: '/article/' },
            { text: 'Github', link: 'https://github.com/listen936' },
        ],
        // sidebar:'auto',
        sidebar: [
            {
              title: '其他',   // 必要的
              path: '/article/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              collapsable: true, // 可选的, 默认值是 true,
              sidebarDepth: 3,    // 可选的, 默认值是 1
              children: [
                ['/article/other/markdown','markdown的常用语法']
              ]
            },
          ],

        lastUpdated: 'Last Updated',
    }
}