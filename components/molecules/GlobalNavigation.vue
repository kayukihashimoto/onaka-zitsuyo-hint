<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/#fucyo">おなかの不調？</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/#hint">不調と向き合うわたしの実用ヒント</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/#about">このサイトについて</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: flex-end;
  gap: 8px;

  li {
    a {
      display: flex;
      padding: 10px 8px;
      justify-content: flex-end;
      font-size: 14px;
      transition: .3s;

      &:hover {
        opacity: .56;
      }
    }
  }
}
</style>