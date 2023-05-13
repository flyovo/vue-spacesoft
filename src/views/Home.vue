<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginForm',
  props: {
    name: {
      type: String,
      required: true
    }
  }
});
</script>

<template>
  <div>DASHBOARD</div>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
}
</style>
