---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 驾狗师
  text: hualess的成长之路
  tagline: Write the code, Change the World。
  image:
    src: /logo.png
    alt: 驾狗师
  actions:
    - text: 主页
      link: https://hualess.cn
    - text: 博客
      link: https://blog.hualess.cn
      theme: alt
    - text: 导航
      link: /nav
    - text: 实验室
      link: https://lab.hualess.cn
      theme: alt
features:
  - icon: 📖
    title: 前端技术
    details: 整理前端常用知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
    link: /fe/javascript/types
    linkText: 前端常用知识
  - icon: 💡
    title: 后端技术
    details: 整理后端常用知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
    link: /be/java/
    linkText: 后端常用知识    
  - icon: 📘
    title: 在线简历
    details: 在线生成简历<br />通用的简历模板，可进行在线编辑，下载
    link: https://resume.hualess.cn
    linkText: 在线简历
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link: https://tool.hualess.cn
    linkText: 提效工具
  - icon: 👨‍🔬
    title: 实验室
    details: 收集全网有趣，好玩的站点<br /> 休闲娱乐，消磨时间，上班摸鱼
    link: https://lab.hualess.cn
    linkText: 实验室
  - icon: 💯
    title: 吾志所向，一往无前。
    details: '<small class="bottom-small">架构师/全栈</small>'
    link: /about/me/介绍
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}
</style>
