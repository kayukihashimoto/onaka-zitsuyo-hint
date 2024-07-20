<template>
  <header>
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

  h1,
  h1 a {
    font-size: 12px;
    font-weight: 700;
    line-height: 1.6;
  }
}
</style>