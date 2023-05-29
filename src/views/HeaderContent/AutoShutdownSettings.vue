<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AutoShutdownSettings',
  props: {
    name: {
      type: String,
      required: true
    }
  }
});
</script>

<template>
  <div>auto-shutdown-settings</div>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
}
</style>
