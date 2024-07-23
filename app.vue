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
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap');
</style>