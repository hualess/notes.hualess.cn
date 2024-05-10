import type {DefaultTheme} from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/fe/': [
    {
      text: 'JavaScript 基础知识',
      collapsed: false,
      items: [
        {text: '数据类型', link: '/fe/javascript/types'},
        {text: '引用类型的拷贝', link: '/fe/javascript/clone'},
        {text: '类型转换', link: '/fe/javascript/conversions'},
        {text: '原型和原型链', link: '/fe/javascript/prototype'},
        {text: '继承', link: '/fe/javascript/inherit'}
      ]
    },
    {
      text: 'ES6 常用知识点',
      link: '/fe/es6/'
    },
    {
      text: 'TypeScript',
      link: '/fe/typescript/base'
    },
    {
      text: 'HTML / CSS',
      collapsed: false,
      items: [
        {text: 'HTML 理论知识点', link: '/fe/html/'},
        {text: 'CSS 理论知识点', link: '/fe/css/'}
      ]
    },
    {
      text: '浏览器与网络',
      collapsed: false,
      items: [
        {text: '浏览器相关知识点', link: '/fe/browser/'},
        {text: 'TCP', link: '/fe/network/tcp'},
        {text: 'HTTP', link: '/fe/network/http'}
      ]
    },
    {
      text: '概念知识点',
      collapsed: false,
      items: [
        {text: '模块化', link: '/fe/concept/module'},
        {text: '前端页面渲染方式', link: '/fe/concept/page-rendering'}
      ]
    },
    {
      text: '编程题',
      link: '/fe/coding/'
    }
  ],
  '/note/': [
    {
      text: '吐槽大会',
      items: [
        {text: '一个完美主义者的自我救赎', link: '/note/01.一个完美主义者的自我救赎.md'},
        {text: '消费者不应该是冤大头', link: '/note/02.消费者不应该是冤大头.md'},
        {text: '身份和地位的作用', link: '/note/04.身份和地位的作用.md'},
        {text: '年轻人请务必为钱而工作', link: '/note/05.年轻人请务必为钱而工作.md'},
        {text: '人间不值得', link: '/note/09.人间不值得.md'},
        {text: '反向拆解让人上瘾的套路，找回自律', link: '/note/10.反向拆解让人上瘾的套路，找回自律.md'},
        {text: '听不进真话，是穷人最大的困境', link: '/note/11.听不进真话，是穷人最大的困境.md'},
        {text: '韭菜论', link: '/note/12.韭菜论.md'},
        {text: '你知道的越多，不知道的也就越多', link: '/note/13.你知道的越多，不知道的也就越多.md'},
      ]
    }
  ],
}
