<script lang="ts">
import { defineComponent } from 'vue';
// import LogoImage from '@/assets/images/logo.svg';

export default defineComponent({
  name: 'Logo',
  props: {
    width: { type: String, required: true },
    height: { type: String, required: true }
  }
  //   components: {
  //     LogoImage
  //   }
});
</script>

<template>
  <!-- width="{width}" height="{height}" -->
  <a class="img-wrapper" href="/" :style="{ width: width, height: height }">
    <!-- <LogoImage /> -->
    <img />
  </a>
</template>

<style lang="scss" scoped>
.img-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  background-color: #f7fbfc;

  > img {
    content: url('@/assets/images/logo.svg');
  }
}
</style>
