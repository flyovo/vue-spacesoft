<script setup lang="ts">
import LoginForm from '@/components/Login/LoginForm.vue';
</script>

<template>
  <main>
    <LoginForm />
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(@/assets/images/background.png);
}
</style>
