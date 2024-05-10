import type {DefaultTheme} from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {text: '导航', link: '/nav', activeMatch: '^/nav'},
  {text: '主页', link: 'https://hualess.cn'},
  {
    text: '前端',
    items: [
      {text: 'JavaScript 基础知识', link: '/fe/javascript/types'},
      {text: 'ES6 常用知识', link: '/fe/es6/'},
      {text: 'TypeScript 基础知识', link: '/fe/typescript/base'},
      {text: '浏览器相关知识', link: '/fe/browser/'}
    ],
    activeMatch: '^/fe'
  },
  {text: '后端', link: '/be/java/', activeMatch: '^/be'},
  {text: '吐槽', link: '/note/01.一个完美主义者的自我救赎.md', activeMatch: '^/note'},
  {
    text: 'hualess',
    items: [
      {text: '主页', link: 'https://hualess.cn'},
      {text: '笔记', link: 'https://notes.hualess.cn'},
      {text: '博客', link: 'https://blog.hualess.cn'},
      {text: '简历', link: 'https://resume.hualess.cn'},
      {text: '实验室', link: 'https://lab.hualess.cn'},
      {text: '在线工具', link: 'https://tool.hualess.cn'},
    ]
  }
]
