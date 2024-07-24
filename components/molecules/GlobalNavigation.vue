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

        @media (hover: hover) {
          &:hover {
            opacity: .56;
          }
        }

        @media (hover: none) {
          &:active {
            opacity: .56;
          }
        }
      }
    }
  }
}
</style>