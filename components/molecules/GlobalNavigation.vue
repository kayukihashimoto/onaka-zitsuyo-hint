<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/#fucyo" ontouchstart="">おなかの不調？</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/#hint" ontouchstart="">不調と向き合うわたしの実用ヒント</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/#about" ontouchstart="">このサイトについて</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: block;

  @media screen and (max-width: $screen-md) {
    display: none;
  }

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
}
</style>