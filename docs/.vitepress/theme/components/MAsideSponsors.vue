<script setup lang="ts">
import { VPDocAsideSponsors } from 'vitepress/theme'

const data = [
  {
    items: [{ img: 'https://static.hualess.cn/wx/wxsk.png' }]
  },
  {
    items: [{ img: 'https://static.hualess.cn/wx/zfbsk.png' }]
  }
]
</script>

<template>
  <p class="m-sponsor-title"> 鼓励作者：欢迎 <a class="VPLink link vp-external-link-icon no-icon" href="https://github.com/hualess" target="_blank" rel="noreferrer"><!--[-->star<!--]--></a> 或打赏犒劳 </p>
  <VPDocAsideSponsors :data="data" />
</template>

<style>
.vp-sponsor-grid.medium .vp-sponsor-grid-image {
  max-height: 100px;
}
.m-sponsor-title {
  margin-top: 10px;
  margin-bottom: 6px;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  color: var(--vp-c-brand)
}
</style>
