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
        sidebar: {
            '/foo/': [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two'   /* /foo/two.html */
            ],

            '/bar/': [
                '',      /* /bar/ */
                'three', /* /bar/three.html */
                'four'   /* /bar/four.html */
            ],

            // fallback
            '/': [
                '',        /* / */
                'about'    /* /about.html */
            ]
        },

        lastUpdated: 'Last Updated',
    }
}