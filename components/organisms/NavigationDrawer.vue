<script setup lang="ts">
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  }
});

const emits = defineEmits<(
  {
    (e: 'close'): void
  }
)>()
</script>

<template>
  <aside :class="{ open: props.isOpen }" class="navigation-drawer">
    <button @click="emits('close')">
      <AtomsCloseMenuIcon />
    </button>

    <nav>
      <ul>
        <li>
          <NuxtLink to="/#fucyo" ontouchstart="" @click.native="emits('close')">おなかの不調？</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/#hint" ontouchstart="" @click.native="emits('close')">不調と向き合うわたしの実用ヒント</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/#about" ontouchstart="" @click.native="emits('close')">このサイトについて</NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
.navigation-drawer {
  width: 250px;
  height: 100%;
  position: fixed;
  right: -250px;
  top: 0;
  background: $bark-blue100;
  color: #fff;
  transition: right 0.3s;
  z-index: 1;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px 0;
    padding: 12px;
  }

  nav ul {
    list-style-type: none;
    padding: 0;

    li {
      padding: 16px;

      a {
        color: #fff;
        text-decoration: none;
        display: block;
        line-height: 1.7;
      }
    }
  }

  &.open {
    right: 0;
  }
}
</style>