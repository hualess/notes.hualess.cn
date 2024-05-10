import {createWriteStream} from 'node:fs'
import {resolve, basename} from 'node:path'
import {SitemapStream} from 'sitemap'
import {defineConfig, PageData} from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'
import {head, nav, sidebar, algolia} from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',
  title: '驾狗师',
  description: 'hualess的成长之路，包含前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true
  },

  /* 主题配置 */
  themeConfig: {

    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录'
    },

    socialLinks: [{icon: 'github', link: 'https://github.com/hualess'}],

    footer: {
      message: '驾狗师祝您今天快乐！',
      copyright: 'by hualess'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /* Algolia DocSearch 配置 */
    algolia,

    /*** 自定义配置 ***/
    visitor: {
      /** 统计 id（单独页面的统计会作为前缀使用）*/
      badgeId: 'notes.hualess.cn',
    },

    comment: {
      repo: 'hualess/giscus-comment',
      repoId: 'R_kgDOL5qw_A',
      category: 'Announcements',
      categoryId: 'DIC_kwDOL5qw_M4CfRBE',
    },

  },
  vite: {
    plugins: [MarkdownPreview()],
  },

  /* 生成站点地图 */
  /*transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated
      })
  },
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: 'https://notes.fe-mm.com/' })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  }*/
})
