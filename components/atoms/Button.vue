<template>
  <button>
    <NuxtLink to="/onaka-fucyo">
      <span>
        続きを読む
      </span>
      <AtomsArrowRight />
    </NuxtLink>
  </button>
</template>

<style lang="scss">
button {
  a {
    display: flex;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 28px;
    background: $primary;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    transition: .3s;

    span {
      padding: 2px 0 0 0;
    }

    &:hover {
      background: $primary-hover;
    }
  }
}
</style>