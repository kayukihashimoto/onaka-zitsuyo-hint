<script setup lang="ts">
// ヘッダーに影を付けるかどうかのフラグ
const hasShadow = ref(false);
// メニュー」ボタンの開閉フラグ
const isOpen = ref(false)

function handleScroll() {
  hasShadow.value = window.scrollY > 60;
};

function toggleDrawer() {
  isOpen.value = !isOpen.value
}

function updateWindow() {
  if (window.innerWidth > 768) {
    isOpen.value = false
  }
}

// メニューが開いているときはスクロールを禁止する
watch(isOpen, (newVal) => {
  if (newVal) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', () => {
    updateWindow()
  })
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    updateWindow()
  })
})

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

    <button class="menu-button" @click="toggleDrawer">
      <AtomsMenuIcon />
    </button>

    <OrganismsNavigationDrawer :is-open="isOpen" @close="toggleDrawer" />

    <div :class="{ 'is-open': isOpen }" class="overlay" @click="toggleDrawer" />
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  width: 100%;
  height: 80px;
  background: $secondary;
  padding: 0 16px 0 24px;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  transition: .3s;
  z-index: 4; // ヘッダーを最前面に表示

  @media screen and (max-width: $screen-sm) {
    height: 64px;
  }

  h1 {
    font-size: 12px;

    a {
      font-size: 12px;
      line-height: 1.7;
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

  .menu-button {
    display: none;
    padding: 12px;

    @media screen and (max-width: $screen-md) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

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

  &.shadow {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .overlay {
    display: none;

    &.is-open {
      display: block;
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100lvh;
      background: $bark-blue54;
    }
  }
}
</style>