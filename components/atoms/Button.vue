<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    default: '/',
  },
  label: {
    type: String,
    default: '続きを読む',
  }
});
</script>

<template>
  <button>
    <NuxtLink :to="props.to">
      <span>
        {{ props.label }}
      </span>
      <AtomsArrowRightIcon />
    </NuxtLink>
  </button>
</template>

<style lang="scss" scoped>
button {
  a {
    display: flex;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 28px;
    background: $primary;
    transition: .3s;

    @media (hover: hover) {
      &:hover {
        background: $primary-hover;
      }
    }

    @media (hover: none) {
      &:active {
        background: $primary-hover;
      }
    }
  }
}
</style>