<script setup lang="ts">
// ヘッダーに影を付けるかどうかのフラグ
const hasShadow = ref(false);

const handleScroll = () => {
  hasShadow.value = window.scrollY > 60;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header :class="{ 'shadow': hasShadow }">
    <h1>
      <NuxtLink to="/">
        おなかの不調と向き合う<br>
        わたしの実用ヒント
      </NuxtLink>
    </h1>

    <MoleculesGlobalNavigation />
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  width: 100%;
  height: 80px;
  background: $secondary;
  padding: 16px 16px 16px 24px;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  transition: .3s;
  z-index: 4; // ヘッダーを最前面に表示

  h1 {
    font-size: 12px;

    a {
      font-size: 12px;
      line-height: 1.7;
      transition: .3s;

      &:hover {
        opacity: .56;
      }
    }
  }

  &.shadow {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}
</style>