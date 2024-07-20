<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">おなかの不調？</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">不調と向き合うわたしの実用ヒント</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">このサイトについて</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;

  li {
    a {
      display: flex;
      padding: 10px 8px;
      justify-content: flex-end;
      align-items: flex-start;
      font-size: 14px;
      font-weight: 700;
      line-height: 1;
    }
  }
}
</style>