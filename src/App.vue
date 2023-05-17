<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import ko_KR from 'ant-design-vue/lib/locale-provider/ko_KR';
</script>

<template>
  <a-locale-provider :locale="ko_KR">
    <RouterView />
  </a-locale-provider>
</template>

<style scoped></style>
