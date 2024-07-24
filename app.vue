<script setup lang="ts">
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

onMounted(() => {
  const router = useRouter()
  const setScrollBehavior = (behavior: string) => {
    document.documentElement.style.scrollBehavior = behavior
  }

  // ナビゲーション前にscroll-behaviorを変更する
  const handleBeforeEach = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    if (to.path === from.path) {
      setScrollBehavior('smooth')
    } else {
      setScrollBehavior('auto')
    }
    next()
  }

  router.beforeEach(handleBeforeEach)

  onBeforeUnmount(() => {
    router.beforeEach(handleBeforeEach)
  })
})

useHead({
  title: 'おなかの不調と向き合うわたしの実用ヒント',
  meta: [
    { name: 'description', content: 'みんなと同じ食事をしているのに自分だけおなかの調子がよくない。そんな私が克服した具体的な方法や実用的なヒントを紹介します。' },
    { property: 'og:title', content: 'おなかの不調と向き合うわたしの実用ヒント' },
    { property: 'og:description', content: 'みんなと同じ食事をしているのに自分だけおなかの調子がよくない。そんな私が克服した具体的な方法や実用的なヒントを紹介します。' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://onaka-zitsuyo-hint.com' },
    { property: 'og:image', content: 'https://onaka-zitsuyo-hint.com/ogp.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:locale', content: 'ja_JP' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'おなかの不調と向き合うわたしの実用ヒント' },
    { name: 'twitter:description', content: 'みんなと同じ食事をしているのに自分だけおなかの調子がよくない。そんな私が克服した具体的な方法や実用的なヒントを紹介します。' },
    { name: 'twitter:image', content: 'https://onaka-zitsuyo-hint.com/ogp.png' },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap');
</style>