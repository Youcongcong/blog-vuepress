module.exports = {
    title: 'Personal accumulation',
    description: "一个基于vuePress快速成型的笔记整理站点",
    base:'/blog/',
    themeConfig:{
        // 假定 GitHub。也可以是一个完整的 GitLab网址 自动在nav生成
        repo: 'https://github.com/Youcongcong',
        // 如果你的文档不在仓库的根部
        docsDir: 'docs',
        head:[
            ['link',{rel:'mainfest',href:'/manifest.json'}]
        ],
        serviceWorker:true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Javascript', link: '/javascript/' },
            { text: 'Vue', link: '/vue/' }
        ],
        sidebar: [
            {
              title: 'Javascript',
              collapsable: false,
              children: [
                '/javascript/counter-app'
              ]
            },
            {
              title: 'Vue',
              collapsable: false,
              children: [
                  '/vue/guide',
                  '/vue/api'
              ]
            }
          ]
    }
}